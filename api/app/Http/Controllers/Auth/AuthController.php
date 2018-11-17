<?php

namespace App\Http\Controllers\Auth;

use App\User;
use JWTAuth;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Validator, DB, Hash, Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Mail\Message;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    public function cadastro(){
        return view('auth.register');
    }

    public function register(Request $request){
        
        // header('Access-Control-Allow-Headers: Authorization, Content-Type, X-Auth-Token', 'X-CSRF-TOKEN');

        $credentials = $request->only('name', 'email', 'password');
        $rules = [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users'
        ];
        $validator = Validator::make($credentials, $rules);
        if($validator->fails()) {
            return response()->json(['success'=> false, 'error'=> $validator->messages()]);
        }
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        
        $user = User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);
        $verification_code = str_random(30); //Generate verification code
        DB::table('user_verifications')->insert(['user_id'=>$user->id,'token'=>$verification_code]);
        $subject = "Please verify your email address.";
        Mail::send('auth.emails.verify', ['name' => $name, 'verification_code' => $verification_code],
            function($mail) use ($email, $name, $subject){
                $mail->from(env("MAIL_USERNAME"), "Equipe som de garagem");
                $mail->to($email, $name);
                $mail->subject($subject);
            });
        return response()->json(['success'=> true, 'message'=> 'Obrigado por inscrever-se! Por favor, verifique seu email para completar seu cadastro.']);
    
    }


    public function verifyUser($verification_code)
    {
        $check = DB::table('user_verifications')->where('token',$verification_code)->first();
        if(!is_null($check)){
            $user = User::find($check->user_id);
            if($user->is_verified == 1){
                return response()->json([
                    'success'=> true,
                    'message'=> 'Account already verified..'
                ]);
            }
            $user->update(['is_verified' => 1]);
            DB::table('user_verifications')->where('token',$verification_code)->delete();
            return response()->json([
                'success'=> true,
                'message'=> 'You have successfully verified your email address.'
            ]);
        }
        return response()->json(['success'=> false, 'error'=> "Verification code is invalid."]);
    }

    private function getToken($email, $password)
    {
        $token = null;
        //$credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    /**
     * 
     * Login no sistema
     * @param Request $request
     * */
    public function login(Request $request)
    {
        
        $credentials = $request->only('email', 'password');
        $token = $request->bearerToken();
                
        $rules = [
            'email' => 'required|email',
            'password' => 'required'
        ];
        $validator = Validator::make($credentials, $rules);

        $user = User::where('email', $request->email)->get()->first();


        if ($user && Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);
            $user->remember_token = $token;
            $user->save();
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->remember_token,'name'=>$user->name, 'email'=>$user->email]];           
        }
        else {
          $response = ['success'=>false, 'data'=>'Record doesnt exists'];
            }
        return response()->json($response, 201);
        
    
        
        
        // if($validator->fails()) {
        //     return response()->json(['success'=> false, 'error'=> $validator->messages()], 401);
        // }
        
        // $credentials['is_verified'] = 1;
        
        // try {
        //     // attempt to verify the credentials and create a token for the user
        //     if (!$token = JWTAuth::attempt($credentials)) {
        //         return response()->json(['success' => false, 'error' => 'We cant find an account with this credentials. Please make sure you entered the right information and you have verified your email address.'], 404);
        //     }
        // } catch (JWTException $e) {
        //     // something went wrong whilst attempting to encode the token
        //     return response()->json(['success' => false, 'error' => 'Failed to login, please try again.'], 500);
        // }
        // // all good so return the token
        // return response()->json(['success' => true, 'data'=> [ 'token' => $token ]], 200);
    }
    /**
     * Logout no sistema
     * @param Request $request
     */
    public function logout(Request $request) {
        $this->validate($request, ['token' => 'required']);
        
        try {
            JWTAuth::invalidate($request->input('token'));
            return response()->json(['success' => true, 'message'=> "Deslogado com sucesso."]);
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Erro ao sair, por favor tente novamente.'], 500);
        }
    }

    // recover password
    public function recover(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $error_message = "Seu email não foi localizado.";
            return response()->json(['success' => false, 'error' => ['email'=> $error_message]], 401);
        }
        try {
            Password::sendResetLink($request->only('email'), function (Message $message) {
                $message->subject('Link para reset de senha.');
            });
        } catch (\Exception $e) {
            //Return with error
            $error_message = $e->getMessage();
            return response()->json(['success' => false, 'error' => $error_message], 401);
        }
        return response()->json([
            'success' => true, 'data'=> ['message'=> 'Foi encaminhado para o seu email o link para reset de sua senha, por favor acessar link para efetuar o reset.']
        ]);
    }

    public function token(){
        return response()->json([
            'token' => csrf_token()
        ]);
    }
}
