    
const quesJSON = [
  {
    correctAnswer: 'Three',
    answers: ['Two', 'Three ', 'Four', 'Five'],
    question: "How many pieces of bun are in a McDonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    answers: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    answers: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question: 'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    answers: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    answers: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currIndex = 0;
const totalQuestion = quesJSON.length;

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function shuffledQuestions(index) {
  const { correctAnswer, answers, question } = quesJSON[index];

  const questionElement = document.querySelector('#question');
  const optionElement = document.getElementById('options');
  const scoreElement = document.getElementById('score');

  questionElement.textContent = question;
  optionElement.innerHTML = '';

  const shuffledAnswers = shuffleOptions([...answers]);

  shuffledAnswers.forEach((answer) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    optionElement.appendChild(btn);

    btn.addEventListener('click', () => {
      if (answer.trim() === correctAnswer) {
        score += 1;
      } else {
        score -= 0.25;
      }

      scoreElement.textContent = `Score: ${score}/${totalQuestion}`;
      if (currIndex < totalQuestion - 1) {
        currIndex++;
        shuffledQuestions(currIndex);
      } else {
        questionElement.textContent = 'Quiz Complete!';
        optionElement.innerHTML = '';
        document.getElementById('next').style.display = 'none'; // Hide the next button
      }
    });
  });
}

shuffledQuestions(currIndex);

const nextElement = document.getElementById('next');
nextElement.addEventListener('click', () => {
  const scoreElement = document.getElementById('score');
  const questionElement = document.querySelector('#question');
  const optionElement = document.getElementById('options');

  scoreElement.textContent = `Score: ${score}/${totalQuestion}`;
  if (currIndex < totalQuestion - 1) {
    currIndex++;
    shuffledQuestions(currIndex);
  } else {
    questionElement.textContent = 'Quiz Complete!';
    optionElement.innerHTML = '';
    nextElement.style.display = 'none'; // Hide the next button
  }
});
