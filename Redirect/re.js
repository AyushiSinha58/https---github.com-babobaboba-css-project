document.addEventListener('DOMContentLoaded', () => {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    const percent = progressFill.getAttribute('data-percent');
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${percent}%`;
});

function Done(){
    if(confirm("DOWNLOADED! WOULD YOU LIKE TO QUIT?"))
    window.close();
}

document.addEventListener('DOMContentLoaded', () => {
    Done();
});