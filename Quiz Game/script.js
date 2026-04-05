const questions = [
  {
    category: "Cooking",
    question: "Which pasta is used in Carbonara?",
    choices: ["Penne", "Spaghetti", "Fusilli"],
    answer: "Spaghetti"
  },
  {
    category: "Coding",
    question: "Which language is used for Scratch?",
    choices: ["C++", "Block-based", "Java"],
    answer: "Block-based"
  },
  {
    category: "Science",
    question: "What is the boiling point of water?",
    choices: ["90°C", "100°C", "120°C"],
    answer: "100°C"
  },
  {
    category: "Geography",
    question: "Which is the largest continent?",
    choices: ["Africa", "Europe", "Asia"],
    answer: "Asia"
  },
  {
    category: "Math",
    question: "What is 5 squared?",
    choices: ["10", "25", "50"],
    answer: "25"
  }
];

function getRandomQuestion(questionsArray) {
  let index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choicesArray) {
  let index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObject.answer;
  }
}

let pickedQuestion = getRandomQuestion(questions);
let pickedChoice = getRandomComputerChoice(pickedQuestion.choices);

console.log("Question: " + pickedQuestion.question);
console.log("Computer chose: " + pickedChoice);
console.log(getResults(pickedQuestion, pickedChoice));