export default function playMusic(state=[], action){
    switch (action.type){
        case 'PLAY_MUSIC':
            return [{
                id: action.musica[0].id,
                nomemusica: action.musica[0].nomemusica,
                nomeartista: action.musica[0].nomeartista,
                filepath: action.musica[0].filepath
            }];
        default:
            return state;
    }
}