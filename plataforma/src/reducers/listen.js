export default function listen(state=[], action){
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: action.musicas.find.musica[0].id,
                nomemusica: action.musicas.find.musica[0].nomemusica,
                nomeartista: action.musicas.find.artista[0].nomeartista,
                filepath: action.musicas.find.musica[0].filepath,
                filepath_avatar:action.musicas.find.musica[0].filepath_avatar,
                other_find: {
                    
                }
            }]
        default:
            return state;
    }
}