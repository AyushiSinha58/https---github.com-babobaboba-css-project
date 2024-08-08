function Download(){
    window.open("../Redirect/redirect.html");
}

function startDownload() {
    var elem = document.getElementById("downloadBar");
    var text = document.getElementById("downloadText");
    var width = 0;
    var interval = setInterval(frame, 100);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            text.innerHTML = "Download Complete!";
        } else {
            width++;
            elem.style.width = width + '%';
            text.innerHTML = width + "% downloaded";
        }
    }
}
