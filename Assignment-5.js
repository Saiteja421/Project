let localScore = parseInt(localStorage.getItem('localScore')) || 0;
let sessionScore = parseInt(sessionStorage.getItem('sessionScore')) || 0;

function updateScores() {
    document.getElementById('localScore').textContent = localScore;
    document.getElementById('sessionScore').textContent = sessionScore;
}

document.getElementById('incrementLocalBtn').addEventListener('click', () => {
    localScore++;
    localStorage.setItem('localScore', localScore);
    updateScores();
});

document.getElementById('incrementSessionBtn').addEventListener('click', () => {
    sessionScore++;
    sessionStorage.setItem('sessionScore', sessionScore);
    updateScores();
});

updateScores();
