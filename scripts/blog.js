function onClickBackToDeskButton(e) {
    e.preventDefault()
    window.location.href = './index.html'
}

function handleBackToDeskButtonClickEvent() {
    document.getElementById('back-to-desk').addEventListener('click', onClickBackToDeskButton)
}

handleBackToDeskButtonClickEvent()