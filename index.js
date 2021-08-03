
const chalk = require("chalk");

console.log("")


// const miles = 18;
// const calculateFeet = miles => miles * 5280;

// console.log(chalk`
// 	There are {bold 5280 feet} in a mile.
// 	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);

// var play = readlineSync.keyInYN("do u like me?");
// var play1 = readlineSync.keyInYN("really");


var readlineSync = require('readline-sync');
var userName = readlineSync.question("Whats your name?!  "); 
console.log(chalk.yellow("\nWELCOME " +userName ,"to DO U KNOW SHREYA? "));
console.log(chalk.magenta.bgWhite("(Enter your answers in lowercase letters)\n"));
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

// hello("1] Where do I stay? ! ","manali");
// hello("\n2] Where do I work? ! ","mumbai");
// hello("\n3] What is my favourite food  ? ! ","momos");
// hello("\n4] Whts my nickname?! ","pinky");
// hello("\n5] whats is my job profile? ! ","manali");

console.log("\n Your final score is: ", score );