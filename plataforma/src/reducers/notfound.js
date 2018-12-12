export default function notfound(state=[], action){
    console.log(action);
    switch (action.type){
        case 'ADD_NOTFOUND': 
            return [...state,{
                error: action.error.message
            }]
        default:
            return state
    }
}