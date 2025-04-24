const weekdayFromat = { weekday: 'short' }
const dateFormat = { month: 'short', day: 'numeric', year: 'numeric' }
const timeFormat = { timestyle: 'long' }

function setTodayDate() {
    const today = new Date();
    const calenderDiv = document.getElementById('calender-today');

    calenderDiv.firstElementChild.innerText = today.toLocaleDateString('en-US', weekdayFromat) + ' ,';
    calenderDiv.lastElementChild.innerText = today.toLocaleDateString('en-US', dateFormat).replace(',', '');
}

setTodayDate();