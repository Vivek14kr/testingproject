function msToTime(duration) {
    
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? hours : hours;
    minutes = (minutes < 10) ?  minutes : minutes;
    seconds = (seconds < 10) ?  seconds : seconds;

    if (hours == 0 && minutes == 0){
        return seconds + " " + "seconds"
    } else if (minutes == 0 && seconds == 0){
        return hours + " "+ "hour"
    } else if (seconds == 0 && hours == 0 && minutes == 1){
        return minutes + " "+ "minute"
    } else if (hours == 0 && minutes == 1) {
        return minutes + " " + "minute " + seconds + " " + "seconds"
    } else if (seconds == 0 && hours == 0) {
        return minutes + " " + "minutes"
    } else if (hours == 0) {
        return minutes + " " + "minutes " + seconds + " " + "seconds"
    } else {
        return hours + " " + "hour " + minutes + " " + "minutes " + seconds + " " + "seconds"
    }
}

module.exports = { msToTime }