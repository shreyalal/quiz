
const chalk = require("chalk");

console.log("")

var readlineSync = require('readline-sync');
var userName = readlineSync.question("Whats your name?!  ");
console.log(chalk.blue("\nWELCOME " + userName, "to DO U KNOW SHREYA? "));
console.log(chalk.magenta.bgWhite.italic("(Enter your answers in lowercase letters)\n"));
score = 0;

function hello(question, answer) {
  var currentAnswer = readlineSync.question(question);

  if (answer === currentAnswer) {
    console.log(chalk.green("\nYou are right! "));
    score = score + 1;
  }
  else {
    console.log(chalk.yellow("\nYou are wrong! "));
    console.log(chalk.bgMagenta.italic("Right answer is:", answer, ""));

  }
  console.log(chalk.grey("\n*************"));
  console.log("Score: ", score);
  console.log(chalk.grey("*************"));

}

var levelzeroquestion =
  [{
    question: "\nI \nWhere do I stay? \n1] bangalore \n2] mumbai \n3] gujrat \n4] delhi\n Choose your option: ",
    answer: "1"
  },
  {
    question: "\nII \nIn which company do I work? \n1] Microsoft \n2] Intuit \n3] Reliance \n4] Zeus \n Choose your option: ",
    answer: "4"
  },
  {
    question: "\nIII \nWhat is the name of my fvourite movie character \n1] Bunny \n2] Geet \n3] Baburao \n4] Raj \n Choose your option: ",
    answer: "2"
  },
  {
    question: "\nIV \nMy Favourite Movie \n1] Border \n2] Hera Pheri \n3] Bahubali \n4] KGF \n Choose your option: ",
    answer: "4"
  },
  {
    question: "\nV \nWhich is my best vacation place \n1] Manali \n2] Goa \n3] Kerala \n4] Ooty \n Choose your option: ",
    answer: "3"
  },


  ];

for (var i = 0; i < levelzeroquestion.length; i++) {
  var finalExecution = levelzeroquestion[i];

  hello(finalExecution.question, finalExecution.answer);
}



console.log("\n Your final score is: ", score);