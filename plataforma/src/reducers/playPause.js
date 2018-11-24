export default function playPause(state=[], action){
    switch (action.type){
        case 'PLAY':
            return [{
                status: action.status,
            }];
        case 'PAUSE':
            return [{
                status: action.status,
            }];
        default:
            return state;
    }
}