function displayTime() {
    var dateTime = new Date();

    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sc = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (hr >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hr > 12) {
        hr = hr - 12;
    }

    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sc < 10) {
        sc = '0' + sc;
    }

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sc;


}
var updateClock = setInterval(displayTime, 10);


// calendar date 


var today = new Date();

const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName = today.toLocaleDateString("default", {
    weekday: "long"
});
const monthName = today.toLocaleDateString("default", {
    month: "sort"
});

document.querySelector('month-name').innerHTML = monthName;
document.querySelector('day-name').innerHTML = dayName;
document.querySelector('day-number').innerHTML = dayNumber;
document.querySelector('year').innerHTML = year;