export default function play(state=[], action){
    switch (action.type){
        case 'PLAY_MUSIC':
            return [...state, {
                id: action.musica[0].idmusica,
                nomemusica: action.musica[0].nomemusica,
                nomeartista: action.musica[0].nomeartista,
                filepath: action.musica[0].filepath
            }]
        default:
            return state;
    }
}