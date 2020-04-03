
let rps = {
  play: function (userPlay) {
    let playOptions = ["r", "p", "s"];
    let randomPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    
    switch (userPlay) {
      case "r":
        if (randomPlay === "r") {
          this.displayScore("Rock", "Rock", "Tie!")
        } else if (randomPlay === "s") {
          this.userScore++;
          this.displayScore("Rock", "Scissors", "Win!")
        } else if (randomPlay === "p") {
          this.cpuScore++;
          this.displayScore("Rock", "Paper", "Loss!")
        }
        break;
      
      case "p":
        if (randomPlay === "p") {
          this.displayScore("Paper", "Paper", "Tie!")
        } else if (randomPlay === "r") {
          this.userScore++;
          this.displayScore("Paper", "Rock", "Win!")
        } else if (randomPlay === "s") {
          this.cpuScore++;
          this.displayScore("Paper", "Scissors", "Loss!")
        }
        break;
        
      case "s":
        if (randomPlay === "s") {
          this.displayScore("Scissors", "Scissors", "Tie!")
        } else if (randomPlay === "p") {
          this.userScore++;
          this.displayScore("Scissors", "Paper", "Win!")
        } else if (randomPlay === "r") {
          this.cpuScore++;
          this.displayScore("Scissors", "Rock", "Loss!")
        }
        break;
      }
  },
  userScore: 0,
  cpuScore: 0,
  displayScore: function (user, cpu, res) {
    let userScore = document.getElementById("userScore");
    let userChoice = document.getElementById("userChoice");
    userScore.innerHTML = "<strong>Score:</strong>  " + this.userScore;
    userChoice.innerHTML = "<strong>Choice:</strong>  " + user;

    let cpuScore = document.getElementById("cpuScore");
    let cpuChoice = document.getElementById("cpuChoice");
    cpuScore.innerHTML = "<strong>Score:</strong>  " + this.cpuScore;
    cpuChoice.innerHTML = "<strong>Choice:</strong>  " + cpu;

    let result = document.getElementById("result");
    result.innerHTML = res;

  }
}