<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Planos;

class PlansController extends Controller
{
    // metodo all
    public function index(){
        $plans = Planos::all();
        return response()->json($plans);
    }
}
