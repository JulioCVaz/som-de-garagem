export const TOKEN_KEY = "auth_token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
}

// import axios from 'axios';

// export const isAuthenticated = (formData) => {
//     axios.post("http://localhost:8000/api/login/", formData)
//       .then(response => {
//         return response;
//       })
//       .then(json => {
//         if (json.data.success) {
//             let userData = {
//             name: json.data.data.name,
//             id: json.data.data.id,
//             email: json.data.data.email,
//             auth_token: json.data.data.auth_token,
//             timestamp: new Date().toString()
//           };

//           let appState = {
//             isLoggedIn: true,
//             user: userData
//           };
//           console.log(appState);
//           // salva o estado do usuario no localstorage
//           localStorage["appState"] = JSON.stringify(appState);
//         //   this.setState({
//         //     isLoggedIn: appState.isLoggedIn,
//         //     user: appState.user
//         //   });

//           return true;

//         } else
//             return false;      
//     })
//     .catch(error => {
//         console.log(error);
//       });
// };