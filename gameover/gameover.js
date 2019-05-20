let hiscore = localStorage.getItem("highscore")
document.getElementById('digit').innerHTML = hiscore;

function restart(){
    window.location.replace('http://127.0.0.1:5500/main.html')
}