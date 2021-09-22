
const chalk = require("chalk");

console.log("")

var readlineSync = require('readline-sync');
var userName = readlineSync.question("Whats your name?!  "); 
console.log(chalk.blue("\nWELCOME " +userName ,"to DO U KNOW SHREYA? "));
console.log(chalk.magenta.bgWhite.italic("(Enter your answers in lowercase letters)\n"));
score= 0;

function hello(question, answer)
{
  var currentAnswer = readlineSync.question(question);

  if(answer===currentAnswer)
  {
    console.log(chalk.green("\nYou are right! "));
    score= score+1;
  }
  else
  {
    console.log(chalk.red("\nYou are wrong! "));
    console.log(chalk.bgMagenta.italic("Right answer is:", answer,""));

  }
  console.log(chalk.grey("\n*************"));
  console.log("Score: ", score);
  console.log(chalk.grey("*************"));

}

var levelzeroquestion = 
[{
  question: "\nI \nWhere do u stay? \n1] bangalore \n2] mumbai \n3] gujrat \n4] delhi\n Choose your option: ",
  answer: "1"
},
{
  question: "\nII \nIn which company do u work? \n1] Microsoft \n2] Intuit \n3] Reliance \n4] Zeus \n Choose your option: ",
  answer: "4"
}
];

for(var i=0; i<levelzeroquestion.length; i++)
{
  var finalExecution= levelzeroquestion[i];
  
  hello(finalExecution.question, finalExecution.answer);
}



console.log("\n Your final score is: ", score );