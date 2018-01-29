function getPosition(pos){
    let position = "";
    switch(pos){
        case 'top-center':
            position = 'top-center';
            break;
        case 'top-right':
            position = 'top-right';
            break;
        case 'top-left':
            position = 'top-left';
            break;
        case 'bottom-left':
            position = 'bottom-left';
            break;
        case 'bottom-right':
            position = 'bottom-right';
            break;
        case 'bottom-center':
            position = 'bottom-center';
            break;
        default:
            position = 'bottom-center';
            break;
    }
    return position;
}
export {
    getPosition
};