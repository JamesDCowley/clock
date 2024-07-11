var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');

/* Get and update time every second */
var interval = setInterval(() => {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const timezoneElem = document.getElementById('timezone');

    dayjs.extend(utc);
    dayjs.extend(timezone);
    
    time.innerText = dayjs().format('HH:mm:ss');
    date.innerText = dayjs().format('dddd, D MMMM, YYYY');
    timezoneElem.innerText = dayjs.tz.guess();
}, 1000);