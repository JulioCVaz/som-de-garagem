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

export function addAlbums(albums){
    return{
        type: 'ADD_ALBUMS',
        albums
    }
}

export function playMusic(musica){
    return{
        type: 'PLAY_MUSIC',
        musica
    }
}

export function resetApp(){
    return{
        type: 'RESET'
    }
}