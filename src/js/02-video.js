
import Player from '@vimeo/player';
const TIME_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', onPlayerTimeUpdate);
function onPlayerTimeUpdate(event) {
    localStorage.setItem(
        TIME_KEY, `${event.seconds}`
    )};

const savedTime = localStorage.getItem(TIME_KEY) || 0;

player.setCurrentTime(savedTime);