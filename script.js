const dayjs = require('dayjs');

/* Get and update time every second */
var interval = setInterval(() => {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const timezone = document.getElementById('timezone');

    time.innerText = dayjs().format('HH:mm:ss');
    date.innerText = dayjs().format('dddd, D MMMM, YYYY');
}, 1000);