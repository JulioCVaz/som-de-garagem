export function listenMusic(musicas){
    return{
        type:'LISTEN_MUSIC',
        musicas
    }
}


export function addArtist(artistas){
    return{
        type: 'ADD_ARTISTS',
        artistas
    }
}