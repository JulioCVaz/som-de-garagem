export default function artists(state=[], action){
    console.log(action);
    switch (action.type){
        case 'ADD_ARTISTS' :
            return [...state,{
                nomeartista: action.artistas.artista[0].nomeartista,
                descartista: action.artistas.artista[0].desc_artista,
                filepath: action.artistas.artista[0].filepath,
                descalbum: action.artistas.data.album[0].desc_album,
                filepathavatar: action.artistas.data.album[0].filepath_avatar,
                tituloalbum: action.artistas.data.album[0].titulo_album,
                // trazer um array com os album e as musicas

            }]
        default:
            return state

    }
}