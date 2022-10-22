let username = prompt( "What is your name? ");
console.log("Welcome " + username);

 let score = 0;
 let level = 0;

  for (let i = 2; i < 10; i++) {
  let guess = Math.floor(Math.random() * i) + 1;
  let userinput = parseInt(prompt("Enter a number between 1 and " + i));
  console.log(userinput);
    if (userinput == guess) {
      level++;
      console.log("You are in level " + level)
      score++;
      console.log("Your score is now " + score)
    }
    let repeat = () => {
        score = 0;
        level = 0;
        userinput = parseInt(prompt("Enter a number between 1 and " + i));
    }
    while (userinput != guess) {
      repeat();
    }
