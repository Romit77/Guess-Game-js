// GUESS GAMEEEE


let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    let maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while(guess !== targetNum) {
    attempts++;
    if(guess > targetNum){
        guess = parseInt(prompt("Too high! enter a new guess"));
    }
    else{
        guess = parseInt(prompt("too low"));
    }
}

console.log(`you took ${attempts} guesses to get it right`);