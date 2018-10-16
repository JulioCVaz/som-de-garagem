export default function listen(state = [], action){
    switch (action.type){
        case 'LISTEN_MUSIC':
            return [...state, {
                id: Math.random(),
                music: action.music
            }]
        default:
            return state;
    }
}