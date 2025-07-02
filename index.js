const questions = [
    {
      question: "What is the time complexity of binary search in a sorted array?",
      options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "Which data structure uses FIFO (First In First Out)?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue"
    },
    {
      question: "What is the worst-case time complexity of Quick Sort?",
      options: ["O(n log n)", "O(n^2)", "O(log n)", "O(n)"],
      answer: "O(n^2)"
    },
    {
      question: "Which data structure is used in recursion?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack"
    },
    {
      question: "Which of the following is not a linear data structure?",
      options: ["Array", "Linked List", "Stack", "Tree"],
      answer: "Tree"
    },
    {
      question: "What is the time complexity to insert at the beginning of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(1)"
    },
    {
      question: "Which traversal method is used in Depth First Search (DFS)?",
      options: ["Level Order", "In-order", "Stack-based", "Queue-based"],
      answer: "Stack-based"
    },
    {
      question: "What does 'hashing' provide in a hash table?",
      options: ["Sorting", "Searching", "Indexing", "Fast access"],
      answer: "Fast access"
    },
    {
      question: "Which sorting algorithm is best for nearly sorted arrays?",
      options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
      answer: "Insertion Sort"
    },
    {
      question: "What is a characteristic of a binary search tree (BST)?",
      options: [
        "All nodes are greater than root",
        "Left < Root < Right",
        "All nodes have two children",
        "Only even values allowed"
      ],
      answer: "Left < Root < Right"
    }
];
  
let flag = false;
let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');

//fetch modal and overlay........
const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.overlay');

loadQuestion();
function loadQuestion() {
    //off flag........
    flag = false;
    const current = questions[currentIndex];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';

    current.options.forEach(option => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const correct = questions[currentIndex].answer;
    if (selected === correct) {
        feedbackEl.textContent = "✅ Correct!";
        feedbackEl.style.color = "green";
        score++;
        btn.style.backgroundColor = "green";
    } 
    else {
        btn.style.backgroundColor = "red";
        feedbackEl.textContent = `❌ Wrong! Correct Answer: ${correct}`;
        feedbackEl.style.color = "red";
    }

    // Disable all options after answer........
    Array.from(optionsEl.children).forEach(btn => btn.onclick = null);
    flag = true;
}

nextBtn.addEventListener('click', () => {
    //if clicking next btn without selecting any option tb ka case......
    if(!flag){
        return;
    }
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } 
    else {
        // questionEl.textContent = "🎉 Quiz Completed!";
        scoreEl.textContent = `${score}/${questions.length}`;
        //empty ............
        optionsEl.innerHTML = '';
        feedbackEl.textContent = '';
        nextBtn.disabled = true;

        openModal();
    }
});






//Modal open function......
const openModal=()=>{
    modal.classList.add('activate-modal');
    overlay.classList.add('activate-overlay');
}
//Modal Close function.....
const closeModal =()=>{
    modal.classList.remove('activate-modal');
    overlay.classList.remove('activate-overlay');
    //Restart quiz......
    currentIndex = 0;
    score = 0;
    flag = 0;
    loadQuestion();
} 
  