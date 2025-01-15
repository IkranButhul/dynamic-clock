function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
document.addEventListener('DOMContentLoaded', (event) => {
    const clockElement = document.createElement('div');
    clockElement.id = 'clock';
    clockElement.style.fontSize = '2em';
    clockElement.style.fontFamily = 'Arial, sans-serif';
    clockElement.style.textAlign = 'center';
    clockElement.style.marginTop = '20px';
    document.body.appendChild(clockElement);

});
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.createElement('button');
    button.textContent = 'Change Color';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.addEventListener('click', () => {
        const clockElement = document.getElementById('clock');
        clockElement.style.color = clockElement.style.color === 'black' ? 'red' : 'black';
    });
    document.body.appendChild(button);
});
document.addEventListener('DOMContentLoaded', (event) => {
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Clock';
    stopButton.style.display = 'block';
    stopButton.style.margin = '20px auto';
    let clockRunning = true;
    let intervalId = setInterval(updateClock, 1000);

    stopButton.addEventListener('click', () => {
        if (clockRunning) {
            clearInterval(intervalId);
            stopButton.textContent = 'Start Clock';
        } else {
            intervalId = setInterval(updateClock, 1000);
            stopButton.textContent = 'Stop Clock';
        }
        clockRunning = !clockRunning;
    });

    document.body.appendChild(stopButton);
});