import axios from 'axios';

export const isAuthenticated = (formData) => {

    axios.post("http://localhost:8000/api/login/", formData)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {

          alert("Login Successful!");

            let userData = {
            name: json.data.data.name,
            id: json.data.data.id,
            email: json.data.data.email,
            auth_token: json.data.data.auth_token,
            timestamp: new Date().toString()
          };

          console.log(userData);
          
        }});


    // if(params){
    //     fetch(`http://localhost:8000/api/login`,{
    //         method: 'POST',
    //         mode:"no-cors",
    //         credentials: "same-origin",
    //         body: params,
    //         headers:{
    //             'Content-Type': 'application/json'
    //           }
    //     }).then(response => console.log("success:", JSON.stringify(response)))
    //     .catch(error => console.log('error:', error));
    //     return true;
    // }
    // return true;
};