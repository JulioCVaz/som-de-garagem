export default function profile(state = [], action){
    console.log(action);
    switch(action.type){
        case 'LOGIN':
            return action.profile;
        default:
            return state
    }
}