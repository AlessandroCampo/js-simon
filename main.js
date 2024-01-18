let today = new Date()
const timerHTML = document.getElementById("timer")
const hoursHTML = document.getElementById("hours")
const minutesHTML = document.getElementById("minutes")
const secondsHTML = document.getElementById("seconds")
const circle1 = document.querySelector("#seconds_container circle")
const circle2 = document.querySelector("#minutes_container circle")
const circle3 = document.querySelector("#hours_container circle")

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

hoursHTML.innerText = hoursLeft
minutesHTML.innerText = minutesLeft
secondsHTML.innerText = secondsLeft


let circleDashOffset1 = 472 - (secondsLeft * 472 / 60)
circle1.style.strokeDashoffset = circleDashOffset1
let circleDashOffset2 = 472 - (minutesLeft * 472 / 60)
circle2.style.strokeDashoffset = circleDashOffset2
let circleDashOffset3 = 472 - (hoursLeft * 472 / 24)
circle3.style.strokeDashoffset = circleDashOffset3

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

    circleDashOffset1 = 472 - (secondsLeft * 472 / 60)
    circleDashOffset2 = 472 - (minutesLeft * 472 / 60)
    circleDashOffset3 = 472 - (hoursLeft * 472 / 24)

    // circle1.style.strokeDashoffset = circleDashOffset1
    // circle2.style.strokeDashoffset = circleDashOffset2
    // circle3.style.strokeDashoffset = circleDashOffset3

    gsap.to(circle1, {
        strokeDashoffset: circleDashOffset1,
        duration: 1
    })

    gsap.to(circle2, {
        strokeDashoffset: circleDashOffset2,
        duration: 1
    })

    gsap.to(circle3, {
        strokeDashoffset: circleDashOffset3,
        duration: 1
    })

    hoursHTML.innerText = hoursLeft
    minutesHTML.innerText = minutesLeft
    secondsHTML.innerText = secondsLeft

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

