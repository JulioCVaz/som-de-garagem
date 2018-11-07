export const isAuthenticated = (params) => {

    if(params){
        fetch(`http://localhost:8000/api/login/${params['token']}`,{
            // mode:"no-cors",
            method: 'POST',
            // credentials: "same-origin",
            body: params,
            headers: new Headers()
        }).then(response => console.log("success:", JSON.stringify(response)))
        .catch(error => console.log('error:', error));
        return true;
    }
    return true;
};