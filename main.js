let today = new Date()
const timerHTML = document.getElementById("timer")
const hoursHTML = document.getElementById("hours")
const minutesHTML = document.getElementById("hours")
const secondsHTML = document.getElementById("hours")
let secondsLeft
let minutesLeft
let hoursLeft
const currentHours = today.getHours()
const currentMinutes = today.getMinutes()
const currentSeconds = today.getSeconds()
const targetHours = 9
const targetMinutes = 30
const targetSeconds = 0
let hoursLeftUntilTomorrow = 23 - currentHours
let minutesLeftUntilNextHour = 59 - currentMinutes
let secondsLeftUntilNextMinute = 59 - currentSeconds
hoursLeft = hoursLeftUntilTomorrow + targetHours
minutesLeft = minutesLeftUntilNextHour + targetMinutes
secondsLeft = secondsLeftUntilNextMinute + targetSeconds

console.log(hoursLeft, minutesLeft, secondsLeft)
while (secondsLeft > 60) {
    secondsLeft = secondsLeft - 60
    minutesLeft++
}
while (minutesLeft > 60) {
    minutesLeft = minutesLeft - 60
    hoursLeft++
}

console.log(hoursLeft, minutesLeft, secondsLeft)
function timerFunction() {
    secondsLeft--
    if (secondsLeft == 0) {
        secondsLeft = 60
        minutesLeft--
    }

    if (minutesLeft == 0) {
        minutesLeft = 60
        hoursLeft--
    }

    // if (secondsLeft < 10 && minutesLeft > 10) {
    //     timerHTML.innerText = `${hoursLeft}:${minutesLeft}:${String(secondsLeft).padStart(2, '0')}`
    // } else if (secondsLeft > 10 && minutesLeft > 10) {
    //     timerHTML.innerText = `${hoursLeft}:${minutesLeft}:${secondsLeft}`
    // } else if (secondsLeft < 10 && minutesLeft < 10) {
    //     timerHTML.innerText = `${hoursLeft}:${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`
    // } else if (secondsLeft > 10 && minutesLeft < 10) {
    //     timerHTML.innerText = `${hoursLeft}:${String(minutesLeft).padStart(2, '0')}:${secondsLeft}`
    // }
}


setInterval(timerFunction, 1000)

