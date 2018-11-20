export default function play(state=[], action){
    console.log(action);
    switch (action.type){
        case 'PLAY_MUSIC':
            return [...state, {
                status: action.data.status,
                id: action.data.musica[0].idmusica,
                nomemusica: action.data.musica[0].nomemusica,
                nomeartista: action.data.musica[0].nomeartista,
                filepath: action.data.musica[0].filepath
            }];
        case 'PAUSE_MUSIC':
            return [...state, {
                status: action.data.status,
                id: action.data.musica[0].idmusica,
                nomemusica: action.data.musica[0].nomemusica,
                nomeartista: action.data.musica[0].nomeartista,
                filepath: action.data.musica[0].filepath
            }];
        default:
            return state;
    }
}