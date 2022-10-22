var score = 0;
var level = 1;
var whileCondition = true;
var userinput = "";
let max = 2;
let min = 1;
var range = (max - min) + 1;

function randomInRange(range){
	return Math.floor(Math.random() * range) + 1;
}

function reset() {
    console.log(`${userName}  try again pick a number between 1 and ${range} `);
    userinput = prompt(`pick number between 1 and ${range} `);
}

var userName = prompt("What is your name? ");
console.log(" Welcome " + userName);

while (whileCondition) {
    if (userName) {
        var randomNum = randomInRange(range);
        var userinput = parseInt(prompt("Hi " + userName + " Enter a number between 1 and " + range + " "));

        var newNo = Math.floor(userinput);

        if (randomNum === newNo) {
            max++
            range++;
            score++;
            level++

            console.log(`${userName} have gotten 1 point, you are now in level ${level} and your point is ${score}`);
        } else {
         reset();
        }
    } else {
        console.log("enter your name");
        whileCondition = false;
    }
}