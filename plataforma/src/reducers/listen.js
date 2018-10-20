export default function listen(state=[], action){
    console.log('aqui');
    console.log(action);
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: action.musicas[0].idmusica,
                nomemusica: action.musicas[0].nomemusica,
                nomeartista: action.musicas[0].nomeartista,
                filepath: action.musicas[0].filepath,
                filepath_avatar:action.musicas[0].filepath_avatar
            }]
        default:
            return state;
    }
}