export default function listen(state=[], action){
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: action.musicas[0].idmusica,
                musicas: action.musicas[0].nomemusica
            }]
        default:
            return state;
    }
}