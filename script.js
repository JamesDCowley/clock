const dayjs = require('dayjs');

var updateTime = () => {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const timezone = document.getElementById('timezone');

    time.innerText = dayjs.format('hh:mm:ss');
    setTimeout(updateTime(), 1000);
}