// countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 
// milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” 
// and stop.

function countdown(num) {
    let timerId = setInterval(function () {
        num -= 1;
        if (num <= 0) {
            clearInterval(timerId);
            console.log("DONE!");
        }
        else {
            console.log(num);
        }
    }, 1000)
}


// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 
// milliseconds and each time that a random number is picked, add 1 to a counter. If the number is 
// greater than .75, stop the timer and console.log the number of tries it took before we found a 
// number greater than .75.

function randomGame() {
    let counter = 0;
    let pickedNumber;
    let timerId = setInterval(function () {
        pickedNumber = Math.random();
        counter += 1;
        if (pickedNumber > 0.75) {
            clearInterval(timerId);
            if (counter === 1) {
                console.log(`We only took ${counter} try to get above 0.75.`);
            } else {
                console.log(`We took ${counter} tries to get above 0.75.`)
            }
        }
    }
        , 1000);
}