export const isAuthenticated = (params) => {

    if(params){
        fetch('http://localhost:8000/api/login',{
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log("Success:", JSON.stringify(response)))
        .catch(error => console.log('Error:', error));

        return true;
    }
    return true;
};