export default function listen(state=[], action){
    console.log(state);
    console.log(action);
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: 2,
                musicas: 'TESTE'
            }]
        default:
            return state;
    }
}