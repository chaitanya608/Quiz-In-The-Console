const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
  // My solution for challenges 1 to 11. Wrote almost 100% of it myself after a lot of struggle to figure it out. However, Jonas' solution made me feel that my code needs some refinement.
  // Even though my solution has more features, Jonas' solution looks simple and easily understandable.
  function Question(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
  }

  Question.prototype.askQuestion = function() {
    // logs the selected random question to the console.
    console.log((questionsArray.indexOf(this) + 1) + ') ' + this.question);
  
    for(let prop in this.answers) {
      console.log(prop + ': ' + this.answers[prop]);
    }
  }
  Question.prototype.checkAnswer = function(userAnswer) {
    // checks if user input is correct
    if(userAnswer != null && userAnswer == this.correctAns) {
      score++;
      console.log('Your current score: ' + score);
      console.log('CORRECT Answer!!!');
      validateAnswer(generateRandomQ());
    } else if(userAnswer == null || typeof userAnswer == NaN) {
      // asks the same question again if the input is invalid.
      alert('Enter a valid answer');
      // this.askQuestion();
      validateAnswer(this);
    } else if(userAnswer == 'exit') {
      // ends the game if user enters 'exit'
      console.log('GAME OVER!!!');
      console.log('Your final score: ' + score);
    } else {
      // asks the same question again if the input is wrong.
      console.clear();
      console.log('WRONG Answer :(');
      console.log('Your current score: ' + score);
      console.log('Try Again');
      validateAnswer(this);
    }
  }
  
  let score = 0;
  let question1 = new Question('What is Captain America\'s sheild made of?', {1: 'Vibranium', 2: 'Gold-Titanium Alloy', 3: 'Steel', 4: 'Nano-Tubes'}, 1);
  let question2 = new Question('What did Bruce Banner experiment himself with?', {1: 'X-Rays', 2: 'Electro-Magnetic Radiation', 3: 'Visible Light', 4: 'Gamma Rays'}, 4);
  let question3 = new Question('What is Tony Stark\'s Iron Man suit made of?', {1: 'Nano-Tubes', 2: 'Gold-Titanium Alloy', 3: 'Vibranium', 4: 'Stainless Steel'}, 2);
  let question4 = new Question('What is the core element of Iron Man\'s first Arc-Reactor?', {1: 'Vibranium', 2: 'Gold-Titanium Alloy', 3: 'Palladium', 4: 'Pym Paricles'}, 3);
  
  let questionsArray = [question1, question2, question3, question4];
  // let randomQuestion = Math.floor(Math.random()*questionsArray.length) + 1;
  // let questionToAsk = questionsArray[randomQuestion - 1];
  
  // questionToAsk.askQuestion();
  
  function generateRandomQ() {
    let randomQuestion = Math.floor(Math.random()*questionsArray.length) + 1;
    let questionToAsk = questionsArray[randomQuestion - 1];

    return questionToAsk;
  }

  function validateAnswer(question) {
    // displays a question and checks for validity of answer given by user.

    // newQuestion = generateRandomQ();
    question.askQuestion();
    let userAnswer = prompt('Enter the number of correct answer: ');
    question.checkAnswer(userAnswer);
    // console.log(newQuestion);
  }
  
  // calling this function for the first time.
  validateAnswer(generateRandomQ());
});