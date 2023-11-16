let homeScore = document.getElementById("homescore")
let guestScore = document.getElementById("guestscore")
let homeCount= 0
let guestCount= 0
console.log(homeScore)
console.log(guestScore)

function onepointhome() {
    homeCount += 1
    homeScore.innerText = homeCount
}

function twopointhome() {
    homeCount += 2
    homeScore.innerText = homeCount
}

function threepointhome() {
    homeCount += 3
    homeScore.innerText = homeCount
}

console.log(homeCount)


function onepointguest() {
    guestCount += 1
    guestScore.innerText = guestCount
}

function twopointguest() {
    guestCount += 2
    guestScore.innerText = guestCount
}

function threepointguest() {
    guestCount += 3
    guestScore.innerText = guestCount
}

console.log(guestCount)