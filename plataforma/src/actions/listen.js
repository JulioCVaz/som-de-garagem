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

export function playPauseMusic(status, musica){
    console.log(status);
    if(status == 'true'){
        return{
            type: 'PLAY_MUSIC',
            data: {
                status,
                musica
            }
        }
    }else{
        return{
            type: 'PAUSE_MUSIC',
            data: {
                status,
                musica
            }
        }
    }
}

export function resetApp(){
    return{
        type: 'RESET'
    }
}