var readlineSync = require('readline-sync');

const chalk = require('chalk');

// boxen is a another library for border,padding,margin
const boxen = require('boxen');

var score = 0;

var userAnswer = readlineSync.question(chalk.redBright.bold.bgWhite.inverse('Hello, May I have your name?\n'));

// Welcome message + game rules
console.log('\nWelcome ' +chalk.redBright.bold.bgWhite.inverse (userAnswer) +" to" + chalk.bold.underline.blue("\"Personal Hygiene Quiz\"") + "\nYour current score is " +chalk (score) + boxen ("Have a look at some rules: \n01. There are total 10 question in this game. \n02.Enter only option number(1,2,3,...ect.) as your answer. \n03. You get a +1 for each right answer. \n04.You can exit the game anytime by entering \"e\".  ", {padding: 1, margin: 1, borderStyle: 'single', borderColor:'cyan'} ))

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if(userAnswer === answer) {
    console.log(chalk.green.bold("You are right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red.bgWhite("You are wrong! \n Correct answer is: ") + chalk.green.bold(current.answer));
    

  }
  console.log(boxen("Current score: "  +  chalk.green.bold(score) ,{padding: 1, margin: 1, borderStyle: 'single', borderColor:'cyan'}))
  

   console.log(chalk.bold.green("Your Final Score is: ") + score)

   console.log(chalk.cyan('-------------------------------------------------\n'))
}

var questionAnswers = [
  {
  question: "Q.01. The number of germs on your hands is comparable to the number of: \n\n 1.) Ice cubes in a tray \n 2.) Cars in parking lot \n 3.) Trees in a park \n 4.) Grains of sand on a beach\n",
  answer: "4"
  },
  {
   question: "Q.02. Accoding to the \"CDC\", you should wash your hands for at least? \n\n 1.) 10 Seconds \n 2.) 15 Seconds \n 3.) 20 Seconds \n 4.) 25 Seconds \n",
   answer: "3"
  },
  {
   question: "Q.03. Why is it important to wash your hands before meals? \n\n 1.) Most food has germs in it \n 2.) You may not have enouhg napkins \n 3.) You might touch your mouth while you eat \n 4.) The food may not have been prepared in a clean environment \n",
   answer: "3"
  },
  {
  question: "Q.04. Good personal hygiene ____ harmful germs on your body. \n\n 1.) Attacks \n 2.) Ignores \n 3.) Nurtures \n 4.) Multiplies\n",
  answer: "1"
  },
  {
  question: "Q.05. Which is the most likely reason for brushing your teeth in the morning and before bed? \n\n 1.) Food is easier to remove from your mouth at those times \n 2.) Thats's when most people eat the most \n 3.) It's easiest to remember to do at those times \n 4.) Bacteria continue to digest food in your mouth at night \n",
  answer: "4"
  },
  {
  question: "Q.06.Bad breath and body odor are produced by: \n\n 1.) Viruses replicating themselves \n 2.) Bacteria digesting food \n 3.) Skin glands secreting oils \n 4.) A reaction between oxygen and body secretions \n",
  answer: "2"
  },
  {
  question: "Q.07.Which water temperatures is ideal for washing your hands? \n\n 1.) 0 degrees fehrenheit \n 2.) 32 degrees fehrenheit \n 3.) 100 degrees fehrenheit \n 4.) 212 degrees fehrenheit \n",
  answer: "3"
  },
  {
  question: "Q.08.How can biting you nails be harmful to your health? \n\n 1.) It makes your teeth more brittle \n 2.) It makes your nail too short \n 3.) It transfers bacteria between your mouth and hands \n 4.) It prevents bacteria from digesting food in your mouth \n",
  answer: "3"
  },
  {
   question: "Q.09. Teenagers should probably shower more often than younger kids because: \n\n 1.) Teens are more likely to get dirty \n 2.) Teens have oilier skin \n 3.) Teens have a stronger sense of smell \n 4.) Teens are more concerned about their appearance \n",
   answer: "2"
  },
  {
   question: "Q.10. Pooe hygiene has the most direct effect on which body system? \n\n 1.) Immune system \n 2.) Circulatory system \n 3.) Nervous system \n 4.) Respiratory system \n",
   answer: "1"
  },
  ]

  // data of high score 
  var highScores = [
    {
      name: "Bharat",
      score: 10,
    },
    {
      name: "Saumya",
      score: 9,
    },
    
  ]

  for(i = 0; i < questionAnswers.length; i++) {
    var current = questionAnswers[i]
    play(current.question,current.answer)
    

   
  }

console.log(chalk.red.bold("Top Scores:\n"))

  for(i = 0; i < highScores.length; i++) {
    var currentUser = highScores[i]
    console.log(chalk.underline.yellow.bold("Name:") + "" + chalk.bold.inverse(currentUser.name))

    console.log(chalk.underline.bold.yellow("Score:") + "" + chalk.bold.inverse(currentUser.score))

    console.log("")
   
  }

console.log("Thanks For Playing! " + "Your final score is: " + chalk.green.bold(score) +"\n")

console.log(chalk.red.bold("Did you score higher than any og them?\n\n") + "If yes, then capture a " +chalk.bold.inverse(" screenshort")+" of your "+ chalk.bold.inverse("Final")+"score and send us" + "and your name will be highlighted in the Top Scores!")