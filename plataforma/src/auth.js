export const isAuthenticated = (params) => {

    if(params){
        fetch(`http://localhost:8000/api/login`,{
            method: 'POST',
            mode:"no-cors",
            credentials: "same-origin",
            body: params,
            headers:{
                'Content-Type': 'application/json'
              }
        }).then(response => console.log("success:", JSON.stringify(response)))
        .catch(error => console.log('error:', error));
        return true;
    }
    return true;
};