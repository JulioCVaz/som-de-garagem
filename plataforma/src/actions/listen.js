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

export function addNFound(error){
    return{
        type: 'ADD_NOTFOUND',
        error
    }
}

export function playMusic(musica){
    return{
        type: 'PLAY_MUSIC',
        musica
    }
}

export function playPause(status){
    if(status == "true"){
        return{
            type: 'PLAY',
            status
        }
    }else{
        return{
            type: 'PAUSE',
            status
        }
    }
}

export function resetApp(){
    return{
        type: 'RESET'
    }
}

export function ProfileApplication(profile){
    return{
        type: 'LOGIN',
        profile
    }
}

export function listenGenererMusic(data){
    return{
        type: 'LISTEN_GENERO',
        data
    }
}