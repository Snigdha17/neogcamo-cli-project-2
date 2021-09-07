var readLineSync = require('readline-sync')
const chalk = require('chalk');

var userName = readLineSync.question("What's your name ? ")
console.log("Welcome " +  userName + " to " + chalk.yellow('the World of Harry Potter! '));
console.log("Let's begin!");
console.log("------------------------------------");
var score = 0;
var totalQuestions = 10;
var levelOneQualifierScore = 3;
//High Scores
var highScores = [
  {
    name: "Arul",
    score: 5
  },
  {
    name: "Prakarsh",
    score: 6
  }
]

//Function for the game
function play(question) {
 
 userAnswer = readLineSync.keyInSelect(question.options, chalk.blue(question.question), {cancel: 'Exit'});

 if(userAnswer === -1) {
   console.log("Exiting Game");
   process.exit(0);
 }

 if((userAnswer + 1) === question.answer) {
   console.log(chalk.green("Correct Answer! "));
   score++;
 } else {
   console.log(chalk.red("Wrong Answer! "));
   score--;
 }

console.log("Current Score: " + chalk.yellow(score));
console.log("--------------------------");

}

//Function for displaying the Leaderboard
function displayLeaderBoard(numberOfQuestions) {

console.log(chalk.yellow("GAME OVER! Your Final Score : " + score + "/" + numberOfQuestions) + "\n");

//Leaderboard
console.log(chalk.white.bgRed.bold("Current Leaderboard"));
console.log("--------------------------");

var userBeatHighScore = false;

for(var i = 0; i < highScores.length; i++) {

  console.log(highScores[i].name + " : " + highScores[i].score);
  if(score >= highScores[i].score) {
    userBeatHighScore = true;
  }

}

console.log("--------------------------");

if(userBeatHighScore) {
  console.log("--------------------------");
  console.log("You're a Wizard " + userName + "!!")
  console.log("Think you should be up there? Ping me with a screenshot and I'll add you! ");
} else {
  console.log(chalk.yellow("You are a Muggle " + userName + "!"));
}

}

//List of Level-1 questions and answers
var questionOne = {
  question: "What house at Hogwarts does Harry belong to ? \n",
  options: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
  answer: 4
}


var questionTwo = {
  question: "What position does Harry play on his Quidditch team? \n", 
  options: ["Keeper", "Bludger", "Seeker", "Chaser"],
  answer:  3
}

var questionThree = {
  question: "How did Harry get the scar on his forehead ?\n", 
  options: ["He crashed the Weasley's car into the Whomping Willow", "He was attached by a Basilisk", "Voldemort tried to kill him when he was a baby", "In a quidditch accident"],
  answer: 3
}

var questionFour = {
  question: "What does the Sorcerer's Stone do ? \n", 
  options: ["Transforms any metal into god and produces the Elixir of Life", "Makes the one that holds it invincible", "Tells the one that holds it their future", "Transforms the one who holds it into an animal"],
  answer: 1
}

var questionFive = {
  question: "What is the name of the first Harry Potter book? \n", 
  options: ["Harry Potter and the Sorcerer's stone", "Harry Potter and the Philosopher's stone", "Harry Potter and the Dragon's fire", "Harry Potter and the Chamber of secrets"],
  answer:  2
}

//-------------
//List of Level-2 questions and answers
var questionSix = {
  question: "Who kills Professor Dumbledore ? \n",
  options: ["Bellatrix Lestrange", "Fenrir Greyback", "Severus Snape", "Draco Malfoy"],
  answer: 3
}

var questionSeven = {
  question: "What does the Imperius Curse do ? \n", 
  options: ["Controls", "Tortures", "Turns the person into a pig", "Kills"],
  answer: 1
}

var questionEight = {
  question: "Which is not a method of transport for wizards ?\n", 
  options: ["Aparecium", "Apparition", "A portkey", "Floo powder"],
  answer: 1
}

var questionNine = {
  question: "Who is Scabbers the rat ? \n", 
  options: ["Sirius Black", "Peter Pettigrew", "Professor Mcgonagall", "Remus Lupin"],
  answer: 2
}

var questionTen = {
  question: "What is Harry's Patronus ? \n", 
  options: ["A rabbit", "A unicorn", "A stag", "An owl"],
  answer: 3
}
//--------

var levelOneQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var levelTwoQuestions = [questionSix, questionSeven, questionEight, questionNine, questionTen];

var numberOfL1Questions = levelOneQuestions.length;
var numberOfL2Questions = levelTwoQuestions.length;
for(var i = 0; i < numberOfL1Questions; i++) {
  play(levelOneQuestions[i]);
}

if(score >= levelOneQualifierScore) {
  console.log("CONGRATULATIONS! You're eligible to advance to the next level! ");
  if(!readLineSync.keyInYN("Enter y to continue, n to exit")) {
    displayLeaderBoard(numberOfL1Questions);
  } else { //play Level-2
  for(var i = 0; i < numberOfL2Questions; i++) {
    play(levelTwoQuestions[i]);
  }
  displayLeaderBoard(totalQuestions);
  }
} else {
  displayLeaderBoard(numberOfL1Questions);
}

