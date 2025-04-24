const weekdayFromat = { weekday: 'short' }
const dateFormat = { month: 'short', day: 'numeric', year: 'numeric' }
const timeFormat = { timestyle: 'long' }

function setTodayDate() {
    const today = new Date();
    const calenderDiv = document.getElementById('calender-today');

    calenderDiv.firstElementChild.innerText = today.toLocaleDateString('en-US', weekdayFromat) + ' ,';
    calenderDiv.lastElementChild.innerText = today.toLocaleDateString('en-US', dateFormat).replace(',', '');
}

function clickCompletedButton() {
    const completedButtons = document.getElementsByClassName("completed-btn");
    for (const item of completedButtons) {
        console.log(item);
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.disabled = true;
            createMessageElement(item);
        })
    }
}

function createMessageElement(item) {
    const clickTime = new Date().toLocaleTimeString('en-US', timeFormat);
    const taskTitle = item.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerText;
    const taskCompleteMessage = 'You have Completed The Task ' + taskTitle + ' at ' + clickTime;
    const taskCompleteMessageDiv = document.getElementById("task-complete-message");
    const taskCompleteMessageElement = document.createElement('p');
    taskCompleteMessageElement.textContent = taskCompleteMessage;
    taskCompleteMessageElement.classList.add('bg-rootBackground', 'p-2', 'text-left', 'rounded-md', 'mt-4', 'text-sm');
    taskCompleteMessageDiv.appendChild(taskCompleteMessageElement);
}

setTodayDate();
clickCompletedButton();