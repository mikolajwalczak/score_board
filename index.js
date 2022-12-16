let scoreHome = 0
let scoreGuest = 0
let scoreHomeDisplay = document.getElementById("score-home")
let scoreGuestDisplay = document.getElementById("score-guest")
scoreHomeDisplay.innerText = 0
scoreGuestDisplay.innerText = 0

console.log(scoreHome)


function plusOneHome() {
    scoreHome += 1
    scoreHomeDisplay.innerText = scoreHome
}

function plusTwoHome() {
    scoreHome += 2
    scoreHomeDisplay.innerText = scoreHome
}

function plusThreeHome() {
    scoreHome += 3
    scoreHomeDisplay.innerText = scoreHome
}

function plusOneGuest() {
    scoreGuest += 1
    scoreGuestDisplay.innerText = scoreGuest
}

function plusTwoGuest() {
    scoreGuest += 2
    scoreGuestDisplay.innerText = scoreGuest
}

function plusThreeGuest() {
    scoreGuest += 3
    scoreGuestDisplay.innerText = scoreGuest
}