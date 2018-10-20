export default function listen(state=[], action){
    console.log(action);
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: action.musicas[0].idmusica,
                nomemusica: action.musicas[0].nomemusica,
                nomeartista: action.musicas[0].nomeartista,
                filepath: action.musicas[0].filepath
            }]
        default:
            return state;
    }
}