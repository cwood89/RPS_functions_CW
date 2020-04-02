
const readline = require('readline');


let rps = {
  play: function () {
    console.log("Rock, Paper, Scissors!!\nFirst to three wins!!");
    this.getUserInput();
  },
  getUserInput: function () {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true); // alows only one key to be pressed

    console.log("Choose a letter( r=Rock, p=Paper, s=Scissors ): \nPress 'e' to exit: ");
    process.stdin.on('keypress', (key, data) => {
      if (data.name === "e") {
        process.exit();
      }
      if (data.name === "r" || data.name === "p" || data.name === "s") {
        this.compare(data.name);
      } else {
        console.log("Please enter correct key.")
      }
    });
  },
  compare: function (userPlay) {
    let playOptions = ["r", "p", "s"];
    let randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    console.log("\nYou: " + userPlay);
    console.log("Computer: " + randomPlay + "\n");

    switch (userPlay) {
      case "r":
        if (randomPlay === "r") {
          console.log("Tie, play again.")
        } else if (randomPlay === "s") {
          this.userScore++;
          console.log("You win!")
        } else if (randomPlay === "p") {
          this.cpuScore++;
          console.log("You lose!")
        }
        this.checkScore();
        break;
      
      case "p":
        if (randomPlay === "p") {
          console.log("Tie, play again.")
        } else if (randomPlay === "r") {
          this.userScore++;
          console.log("You win!")
        } else if (randomPlay === "s") {
          this.cpuScore++;
          console.log("You lose!")
        }
        this.checkScore();
        break;
        
      case "s":
        if (randomPlay === "s") {
          console.log("Tie, play again.")
        } else if (randomPlay === "p") {
          this.userScore++;
          console.log("You win!")
        } else if (randomPlay === "r") {
          this.cpuScore++;
          console.log("You lose!")
        }
        this.checkScore();
        break;
      }
  },
  userScore: 0,
  cpuScore: 0,
  checkScore: function () {
    console.log("Your Score: " + this.userScore);
    console.log("Computer Score: " + this.cpuScore);
    if (this.cpuScore == 3) {
      console.log("\nYou lose!");
      process.exit();
    }
    if (this.userScore == 3) {
      console.log("\nYou win!!");
      process.exit();
    }
  }
}
rps.play();