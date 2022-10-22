var userName = prompt("What is your name? ");
console.log(" Welcome " + userName);

var score = 0;
var level = 1;
var range = 2;
var whileCondition = true;
var userinput = "";

function reset() {
    console.log(`${userName}  try again pick a number between 1 and ${range} `);
    userinput = prompt(`pick number betwin 1 and ${range} `);
}

while (whileCondition) {
    if (userName) {
        var randomNum = Math.floor(Math.random() * range) + 1;
        var userinput = parseInt(prompt("Hi " + userName + " Enter a number between 1 and " + range + " "));
        console.log(userinput);

        var newNo = Math.floor(userinput);

        if (randomNum === newNo) {
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