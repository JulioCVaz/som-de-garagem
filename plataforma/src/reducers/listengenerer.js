export default function listengenerer(state=[], action){
    console.log(action);
    switch (action.type){
        case 'LISTEN_GENERO': 
        return [...state, {
            id: action.musicas.find.music.musica[0].id,
            nomemusica: action.musicas.find.music.musica[0].nomemusica,
            filepath: action.musicas.find.music.musica[0].filepath,
            filepath_avatar:action.musicas.find.music.musica[0].filepath_avatar,
            nomeartista: action.musicas.find.music.artista[0].nomeartista
        }]
        default:
            return state
    }
}