const minVal = 1;
const maxVal = 100;

const ans = Math.floor(Math.random()*(maxVal - minVal + 1) + minVal);
console.log(ans);
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minVal} - ${maxVal}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minVal || guess > maxVal) {
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess > ans){
            window.alert("Too High! Try again");
        }
        else if(guess < ans){
            window.alert("Too Low! Try Again"); 
        }
        else{
            window.alert(`You are correct! The guess number is ${ans}. Your attempt is ${attempts}`)
            running = false;
        }
    }
}