export default function profile(state = [], action){
    console.log(action);
    switch(action.type){
        case 'LOGIN':
            return[state];
        default:
            return state
    }
}