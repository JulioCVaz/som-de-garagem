export default function listen(state=[], action){
    console.log(action);
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: action.musicas.find.music.musica[0].id,
                nomemusica: action.musicas.find.music.musica[0].nomemusica,
                filepath: action.musicas.find.music.musica[0].filepath,
                filepath_avatar:action.musicas.find.music.musica[0].filepath_avatar,
                nomeartista: action.musicas.find.music.artista[0].nomeartista,
                more_artista: {
                    artista:{
                        id: action.musicas.find.music.artista[0].id,
                        nomeartista: action.musicas.find.music.artista[0].nomeartista,
                        desc_artista: action.musicas.find.music.artista[0].desc_artista,
                        filepath: action.musicas.find.music.artista[0].filepath,
                        created_at: action.musicas.find.music.artista[0].created_at,
                    }
                },
                metadados: {
                    artistas_metadados: action.musicas.metadados.artistasgeneros,
                    musicas_metadados: action.musicas.metadados.musicasgeneros
                }
            }]
        default:
            return state;
    }
}