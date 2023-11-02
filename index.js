function updateclock(){
// Define the target date (December 1, 2023)
const targetDate = new Date('2023-12-01T00:00:00');

// Get the current date and time
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDifference = targetDate - currentDate;

// Calculate days, hours, minutes, and seconds left
const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const secondsLeft = Math.floor((timeDifference % (1000 * 60) / 1000));

// Time Passed till now
const newDate = new Date('2023-11-01T00:00:00')
const passDate = currentDate - newDate

const daysLeft1 = Math.floor(passDate / (1000 * 60 * 60 * 24));
const hoursLeft1 = Math.floor((passDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesLeft1 = Math.floor((passDate % (1000 * 60 * 60)) / (1000 * 60));
const secondsLeft1 = Math.floor((passDate % (1000 * 60) / 1000));

console.log(`Days left: ${daysLeft} days`);

console.log(`Time left: ${hoursLeft} hours, ${minutesLeft} minutes, and ${secondsLeft} seconds`);


//formating date
let days = "Days"
if (daysLeft < 2 && daysLeft !== 0){
    days = "Day"
}
//formating time
function addingZero(num){
    if (num < 10){
        return '0'+num
    }else{
        return num
    }
}
let hours = addingZero(hoursLeft)
let minutes = addingZero(minutesLeft)
let seconds = addingZero(secondsLeft)



//html output
const data = document.getElementById('dayLeft')
data.textContent = `${daysLeft} ${days}`
const data2 = document.getElementById('timeLeft')
data2.textContent = `${hours}:${minutes}:${seconds}`


const data1 = document.getElementById('dayPassed')
data1.textContent = `${daysLeft1} Days ${hoursLeft1} Hours ${minutesLeft1} Minutes ${secondsLeft1} Seconds`
}
setInterval(updateclock,1000)
//refresh webiste
// Function to reload the page every second
updateclock();