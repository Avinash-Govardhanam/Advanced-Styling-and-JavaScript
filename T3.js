// Quiz questions and answers
const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: [
      "Java", 
      "C", 
      "Python", 
      "JavaScript"
            ],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: [
      "text-color",
      "color",
      "font-color",
      "bgcolor"
    ],
    answer: "color"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "let",
      "var",
      "const",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which method is used to write content into an HTML document?",
    options: [
      "document.write()",
      "document.log()",
      "document.innerHTML()",
      "document.output()"
    ],
    answer: "document.write()"
  },
  {
    question: "Which CSS property controls the size of text?",
    options: [
      "font-size",
      "text-size",
      "font-style",
      "size"
    ],
    answer: "font-size"
  },
  {
    question: "How do you select an element with id \"header\" in CSS?",
    options: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    answer: "#header"
  },
  {
    question: "Which attribute specifies an alternate text for an image?",
    options: [
      "alt",
      "title",
      "src",
      "href"
    ],
    answer: "alt"
  },
  {
    question: "What does the <meta> tag do in HTML?",
    options: [
      "Defines metadata about the document",
      "Creates a hyperlink",
      "Formats text",
      "Inserts an image"
    ],
    answer: "Defines metadata about the document"
  },
  {
    question: "Which property is used to set the background color of an element?",
    options: [
      "color",
      "bgcolor",
      "background-color",
      "background"
    ],
    answer: "background-color"
  },
  {
    question: "What does the position: absolute; property do in CSS?",
    options: [
      "Positions the element in relation to its parent",
      "Keeps the element fixed at the top",
      "Removes the element from the document flow",
      "Centers the element on the page"
    ],
    answer: "Positions the element in relation to its parent"
  },
  {
    question: "Which property is used to control the visibility of an element?",
    options: [
      "display",
      "visibility",
      "opacity",
      "hidden"
    ],
    answer: "visibility"
  },
  {
    question: "Which CSS selector targets all elements inside a specific div?",
    options: [
      "div > *",
      "div *",
      "div + *",
      "div ::all"
    ],
    answer: "div *"
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: [
      "text-style",
      "font-italic",
      "font-style",
      "italic-text"
    ],
    answer: "font-style"
  },
  {
    question: "Which JavaScript function is used to convert a string to an integer?",
    options: [
      "parseInt()",
      "int()",
      "toInt()",
      "stringToInteger()"
    ],
    answer: "parseInt()"
  },
  {
    question: "Which operator is used to concatenate two strings in JavaScript?",
    options: [
      "+",
      "&",
      ".",
      "concat()"
    ],
    answer: "+"
  },
  {
    question: "Which JavaScript method is used to remove the last element from an array?",
    options: [
      "shift()",
      "pop()",
      "removeLast()",
      "splice()"
    ],
    answer: "pop()"
  },
  {
    question: "What does the typeof operator do in JavaScript?",
    options: [
      "Returns the type of a variable",
      "Defines a new variable",
      "Converts a number to a string",
      "Checks if a variable exists"
    ],
    answer: "Returns the type of a variable"
  },
  {
    question: "How can you declare a function in JavaScript?",
    options: [
      "def functionName() {}",
      "func functionName() {}",
      "function functionName() {}",
      "declare function functionName() {}"
    ],
    answer: "function functionName() {}"
  },
  {
    question: "Which CSS property is used to create a shadow effect for text?",
    options: [
      "text-shadow",
      "shadow-text",
      "box-shadow",
      "font-shadow"
    ],
    answer: "text-shadow"
  },
  {
    question: "Which JavaScript method is used to join elements of an array into a string?",
    options: [
      "concat()",
      "join()",
      "merge()",
      "combine()"
    ],
    answer: "join()"
  },
  {
    question: "Which CSS property controls the spacing between lines of text?",
    options: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-spacing"
    ],
    answer: "line-height"
  },
  {
    question: "Which event is fired when an input field loses focus in JavaScript?",
    options: [
      "onchange",
      "onblur",
      "onfocus",
      "onmouseout"
    ],
    answer: "onblur"
  },
  {
  "question": "Which JavaScript keyword is used to check if two values and types are equal?",
  "options": [
    "==",
    "=",
    "===",
    "!="
  ],
  "answer": "==="
}


];


// Grab the container where we'll put the quiz
const quizContainer = document.getElementById("quiz-container");

// Loop through each question
quizData.forEach((q, index) => {
  const quizBlock = document.createElement("div");
  quizBlock.classList.add("quiz-block");

  // Add the question
  const questionHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;

  // Add all options as radio buttons
  const optionsHTML = q.options.map(option => {
    return `
      <div class="option">
        <label>
          <input type="radio" name="q${index}" value="${option}">
          ${option}
        </label>
      </div>
    `;
  }).join('');

  // Create a div for feedback (correct/wrong message)
  const feedbackHTML = `<div id="feedback-${index}"></div>`;

  // Combine all and add to page
  quizBlock.innerHTML = questionHTML + optionsHTML + feedbackHTML;
  quizContainer.appendChild(quizBlock);
});

// Handle the submit button click
document.getElementById("submit").addEventListener("click", () => {
  let score = 0;

  quizData.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    const feedback = document.getElementById(`feedback-${index}`);

    // Clear previous feedback
    feedback.innerHTML = "";

    if (selectedOption) {
      const userAnswer = selectedOption.value;
      const label = selectedOption.parentElement;

      if (userAnswer === q.answer) {
        score++;
        label.classList.add("correct");
        feedback.innerHTML = `<div class="correct-answer">Correct Answer !</div>`;
      } else {
        label.classList.add("wrong");
        feedback.innerHTML = `
          <div class="wrong-answer">Wrong Answer !</div>
          <div class="correct-answer">Correct Answer: ${q.answer}</div>
        `;
      }

      // Disable all options for that question
      const allOptions = document.querySelectorAll(`input[name="q${index}"]`);
      allOptions.forEach(opt => opt.disabled = true);
    } else {
      feedback.innerHTML = `<div class="wrong-answer">You didn't answer. -Correct Answer is : ${q.answer}</div>`;
    }
    
  });

  // Show total score
  const resultEl = document.getElementById("result");
  resultEl.textContent = `You scored ${score} out of ${quizData.length}`;
});




// --- Fetch API Data ---
// ----- Create container -----
  const container = document.createElement('div');
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.textAlign = 'center';
  container.style.margin = '100px auto';
  container.style.maxWidth = '500px';
  container.style.padding = '20px';
  container.style.border = '2px solid #ccc';
  container.style.borderRadius = '10px';
  container.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  document.body.appendChild(container);

  // ----- Title -----
  const title = document.createElement('h2');
  title.textContent = 'Random Joke Generator 😂';
  container.appendChild(title);

  // ----- Joke Display -----
  const jokeText = document.createElement('p');
  jokeText.style.fontSize = '18px';
  jokeText.style.minHeight = '60px';
  container.appendChild(jokeText);

  // ----- Button -----
  const button = document.createElement('button');
  button.textContent = 'Get Another Joke';
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.marginTop = '10px';
  container.appendChild(button);

  // ----- Fetch Joke -----
  async function fetchJoke() {
    jokeText.textContent = 'Loading...';
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      jokeText.textContent = `${data.setup} — ${data.punchline}`;
    } catch (error) {
      jokeText.textContent = 'Failed to fetch a joke. Try again!';
    }
  }

  // Initial joke
  fetchJoke();

  // Button event
  button.addEventListener('click', fetchJoke);