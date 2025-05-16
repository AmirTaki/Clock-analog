let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

const displayTime = () => {
    let data = new Date();

    // Getting hour, mins , secs from date
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotatoin = 6 * mm;
    let sRotation = 6 * ss;

    hour.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotatoin}deg)`
    sec.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayTime, 1000)
























/*
12 hour = 360 deg
1 hour = 360 / 12 = 30
h hours = 30h + m/2
*/

/*
60min = 30 
1min = 30/60 = 1/2
m mins = (1/2)m
*/

/* 
60min = 360deg
1min = 360/60 = 6deg
m min = 6m
*/

/*
60sec = 360deg
1 sec = 360/60 = 6deg
s sec = 6s
*/