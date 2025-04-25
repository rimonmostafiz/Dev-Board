const weekdayFromat = { weekday: 'short' }
const dateFormat = { month: 'short', day: 'numeric', year: 'numeric' }
const timeFormat = { timestyle: 'long' }
const colors = [
    'bg-red-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-purple-200',
    'bg-indigo-200',
    'bg-teal-200',
    'bg-orange-200',
    'bg-lime-200',
    'bg-cyan-200',
    'bg-pink-200',
    'bg-sky-200',
    'bg-amber-200',
    'bg-emerald-200',
    'bg-violet-200',
    'bg-fuchsia-200',
    'bg-rose-200',
    'bg-slate-200',
    'bg-gray-200',
    'bg-zinc-200',
    'bg-neutral-200',
    'bg-stone-200'
  ]

function setInitialTotalCompletedTaskCount(count) {
    document.getElementById('completed-task-count').textContent = count
}

function setInitialTaskCount() {
    let taskCount = document.getElementsByClassName('completed-btn').length
    document.getElementById('task-count').textContent = taskCount
}

function setTodaysDate() {
    const today = new Date();
    const calenderDiv = document.getElementById('calender-today');
    calenderDiv.firstElementChild.textContent = today.toLocaleDateString('en-US', weekdayFromat) + ' ,'
    calenderDiv.lastElementChild.textContent = today.toLocaleDateString('en-US', dateFormat).replace(',', '')
}

function updateCount(elementId, cnt) {
    let taskCount = parseInt(document.getElementById(elementId).textContent) + cnt
    document.getElementById(elementId).textContent = taskCount
}

function getRandomcolor() {
    const randomIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomIndex]
    return color;
}

function createMessageElement(item) {
    const clickTime = new Date().toLocaleTimeString('en-US', timeFormat)
    const taskTitle = item.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent
    const taskCompleteMessage = 'You have Completed The Task ' + taskTitle + ' at ' + clickTime
    const taskCompleteMessageDiv = document.getElementById('task-complete-message')
    const taskCompleteMessageElement = document.createElement('p')
    taskCompleteMessageElement.textContent = taskCompleteMessage
    taskCompleteMessageElement.classList.add('bg-rootBackground', 'p-2', 'text-left', 'rounded-md', 'mt-4', 'text-sm')
    taskCompleteMessageDiv.append(taskCompleteMessageElement)
}

function onClickCompletedButton(event) {
    event.preventDefault()
    this.disabled = true
    alert("Board Updated Successfully");
    if (document.getElementById('task-count').textContent == '1') {
        alert('congrats!!! You have completed all the current task');
    }
    updateCount('task-count', -1)
    updateCount('completed-task-count', 1)
    createMessageElement(this)
}

function onClickClearHistoryButton(event) {
    event.preventDefault();
    const taskCompleteMessageDiv = document.getElementById('task-complete-message')
    taskCompleteMessageDiv.innerHTML = ''
}

function onClickBackroundColorButton(e) {
    e.preventDefault()
    const rootHtml = document.getElementById('root')
    let color = getRandomcolor()
    while (rootHtml.classList[0] === color) {
        color = getRandomcolor();
    }
    rootHtml.classList.remove(rootHtml.classList[0])
    rootHtml.classList.add(color);
}

function onClickDiscoverCard(e) {
    e.preventDefault
    window.location.href = './blog.html'
}

function handleCompletedButtonClickEvent() {
    const completedButtons = document.getElementsByClassName('completed-btn')
    for (const item of completedButtons) {
        item.addEventListener('click', onClickCompletedButton)
    }
}

function handleCleanHistoryButtonClickEvent() {
    const clearHistoryButton = document.getElementById('clr-history-btn')
    clearHistoryButton.addEventListener('click', onClickClearHistoryButton)
}

function handleBackgroundColorChangeButtonClickEvent() {
    document.getElementById('backgroun-color-btn').addEventListener('click', onClickBackroundColorButton)
}

function handleDiscoverCardClickEvent() {
    document.getElementById('discover-card').addEventListener('click', onClickDiscoverCard)
}

setInitialTaskCount()
setTodaysDate()
setInitialTotalCompletedTaskCount(0)
handleCompletedButtonClickEvent()
handleCleanHistoryButtonClickEvent()
handleBackgroundColorChangeButtonClickEvent()
handleDiscoverCardClickEvent()