// checks if the word the same thing... back to front... 
score = 0;
exist = []
highscore = 0
lives = 3
music = new Audio('./assets/stylefunk.ogg')
// this.music.play()
setInterval(() => {
    document.getElementById("life").innerHTML = lives;
}, 500);
// this.music.play()
function palindrome() {
    let word = document.getElementById("word").value
    if (word.length >= 3) {
        lowerCaseword = word.toLowerCase()
        cleanword = lowerCaseword.replace(/[\W_]/g, "");
        wordArray = cleanword.split("");
        reverseArray = wordArray.reverse();
        reverseword = reverseArray.join("");
        if (cleanword == reverseword) {
            const found = exist.some(arr => arr === word);
            if (!found) {
                exist.push(word);
                document.getElementById('word').value = '';
                score += 3
                document.getElementById("answer").innerHTML = score;
                document.getElementById("qinfo").innerHTML = "Yaay! P.A.L.I.N.D.R.O.M.E";
                setTimeout(() => {
                    document.getElementById("qinfo").innerHTML = '';
                }, 1000);
                if (score >= highscore) {
                    localStorage.setItem('highscore', score)
                }
            } else {
                document.getElementById("qinfo").innerHTML = "Word has been used already";
                // document.getElementById('word').value = '';
                setTimeout(() => {
                    document.getElementById("qinfo").innerHTML = '';
                }, 1000);
            }
        } else {
            if (lives <= 1) {
                this.music.stop
                document.getElementById('word').value = '';
                window.location.replace('http://127.0.0.1:5500/gameover/gameover.html')
            }
            if (lives > 0) {
                document.getElementById('word').value = '';
                lives -= 1
                document.getElementById("qinfo").innerHTML = "Its not a paldrome word";
                setTimeout(() => {
                    document.getElementById("qinfo").innerHTML = '';
                }, 1000);
            }

        }
    } else {
        document.getElementById('word').value = '';
        document.getElementById("qinfo").innerHTML = "Enter at least 3 letters";
        setTimeout(() => {
            document.getElementById("qinfo").innerHTML = '';
        }, 1000);
    }

}

function validate() {
    var element = document.getElementById('word');
    element.value = element.value.replace(/[^a-zA-Z-]+/, '');

};

var input = document.getElementById("word");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        palindrome()
    }
})