const questions = [
  {
    number: 1,
    question: "What is C++? What are its main features and advantages?",
  },
  { number: 2, question: "What are the different data types present in C++?" },
  { number: 3, question: "Define ‘std’ and explain its significance in C++." },
  {
    number: 4,
    question:
      "What are references in C++? How are they different from pointers?",
  },
  {
    number: 5,
    question:
      "What is the difference between Call by Value and Call by Reference in C++?",
  },
  { number: 6, question: "Define token in C++ and list its types." },
  { number: 7, question: "What are the main differences between C and C++?" },
  {
    number: 8,
    question: "What is the difference between a struct and a class in C++?",
  },
  {
    number: 9,
    question:
      "What is the difference between a reference and a pointer in C++?",
  },
  {
    number: 10,
    question: "Explain function overloading and operator overloading in C++.",
  },
  {
    number: 11,
    question: "What is the difference between an array and a list in C++?",
  },
  {
    number: 12,
    question:
      "What is the difference between a while loop and a do-while loop in C++?",
  },
  {
    number: 13,
    question:
      "Explain the difference between prefix and postfix operators in C++.",
  },
  {
    number: 14,
    question:
      "What is the difference between the new operator and malloc() in C++?",
  },
  {
    number: 15,
    question:
      "What is the difference between virtual functions and pure virtual functions in C++?",
  },
  { number: 16, question: "What are classes and objects in C++?" },
  { number: 17, question: "What is function overriding in C++?" },
  { number: 18, question: "What are the various OOP concepts in C++?" },
  { number: 19, question: "Explain the concept of inheritance in C++." },
  { number: 20, question: "When should we use multiple inheritance in C++?" },
  { number: 21, question: "What is virtual inheritance in C++?" },
  {
    number: 22,
    question: "What is polymorphism in C++ and how is it implemented?",
  },
  {
    number: 23,
    question: "What are the different types of polymorphism in C++?",
  },
  {
    number: 24,
    question:
      "Compare compile-time polymorphism and runtime polymorphism in C++.",
  },
  { number: 25, question: "Explain constructors in C++ and their types." },
  { number: 26, question: "What are destructors in C++ and how do they work?" },
  { number: 27, question: "What is a virtual destructor in C++?" },
  {
    number: 28,
    question: "Is destructor overloading possible in C++? Why or why not?",
  },
  {
    number: 29,
    question: "Which operations are permitted on pointers in C++?",
  },
  {
    number: 30,
    question: "What is the purpose of the delete operator in C++?",
  },
  { number: 31, question: "How is delete[] different from delete in C++?" },
  {
    number: 32,
    question: "What is a friend class and a friend function in C++?",
  },
  { number: 33, question: "What is an overflow error in C++?" },
  {
    number: 34,
    question: "What does the scope resolution operator do in C++?",
  },
  { number: 35, question: "What are the C++ access modifiers and their uses?" },
  {
    number: 36,
    question:
      "Can you compile a C++ program without the main function? If so, how?",
  },
  {
    number: 37,
    question: "What is the Standard Template Library (STL) in C++?",
  },
  {
    number: 38,
    question:
      "Define inline functions in C++ and explain if recursive inline functions are allowed.",
  },
  {
    number: 39,
    question: "What is an abstract class in C++ and when do you use it?",
  },
  {
    number: 40,
    question:
      "What are static data members and static member functions in C++?",
  },
  {
    number: 41,
    question: "What is the main use of the keyword “volatile” in C++?",
  },
  { number: 42, question: "Define storage class in C++ and name some types." },
  {
    number: 43,
    question:
      "What is a mutable storage class specifier in C++? How is it used?",
  },
  { number: 44, question: "Define block scope variables in C++." },
  {
    number: 45,
    question: "What is the function of the keyword “auto” in C++?",
  },
  { number: 46, question: "Define namespace in C++ and explain its purpose." },
  { number: 47, question: "When is the void() return type used in C++?" },
  {
    number: 48,
    question:
      "What is the difference between shallow copy and deep copy in C++?",
  },
  {
    number: 49,
    question:
      "Can we call a virtual function from a constructor in C++? Explain.",
  },
  {
    number: 50,
    question: "What are void pointers in C++ and how are they used?",
  },
  {
    number: 51,
    question:
      "What is the difference between equal to (==) and assignment operator (=)?",
  },
  { number: 52, question: "What is the size of the int data type in C++?" },
  { number: 53, question: "Which operators cannot be overloaded in C++?" },
  { number: 54, question: "What are the four different data types in C++?" },
  {
    number: 55,
    question: "Explain the concept of polymorphism in C++ with an example.",
  },
  {
    number: 56,
    question: "What is a constructor in C++? Explain with an example.",
  },
  {
    number: 57,
    question: "What is a virtual function in C++? Why is it used?",
  },
  { number: 58, question: "What is the size of an empty class in C++?" },
  { number: 59, question: "How to input a string in C++ with spaces?" },
  { number: 60, question: "How to dynamically allocate a 2D array in C++?" },
  { number: 61, question: "How to use the goto statement in C++?" },
  { number: 62, question: "What is bool in C++?" },
  { number: 63, question: "How to set decimal places in C++?" },
  { number: 64, question: "How to get absolute value in C++?" },
  { number: 65, question: "How to concatenate a string in C++?" },
  { number: 66, question: "How to convert char to int in C++?" },
  {
    number: 67,
    question: "How to generate random numbers in C++ with a range?",
  },
  { number: 68, question: "How to find absolute value in C++?" },
  { number: 69, question: "How to use the strcmp function in C++?" },
  { number: 70, question: "How to write to a file in C++?" },
  { number: 71, question: "What is stringstream in C++?" },
  {
    number: 72,
    question:
      "How would you handle non-numeric user input to prevent program crashes?",
  },
  {
    number: 73,
    question:
      "Which sorting algorithm would you choose for a large array of integers and why?",
  },
  {
    number: 74,
    question: "How would you prevent copying of objects in a C++ class?",
  },
  {
    number: 75,
    question: "How would you verify and locate a memory leak in a C++ program?",
  },
  {
    number: 76,
    question: "How would you handle date and time operations in a C++ project?",
  },
  {
    number: 77,
    question:
      "How would you handle concurrent programming in a C++ application?",
  },
  {
    number: 78,
    question: "How would you read and write binary data to files in C++?",
  },
  {
    number: 79,
    question:
      "How would you reduce memory allocations and deallocations in a performance-critical section of a C++ program?",
  },
  { number: 80, question: "What are the weaknesses of C++?" },
  { number: 81, question: "How is memory managed in C++?" },
  { number: 82, question: "What are the five types of inheritance in C++?" },
  { number: 83, question: "What is multithreading in C++?" },
  { number: 84, question: "What is a template in C++?" },
  { number: 85, question: "How to use a vector in C++?" },
  { number: 86, question: "How to sort a vector in C++?" },
  { number: 87, question: "How to use a map in C++?" },
  { number: 88, question: "How to empty a vector in C++?" },
  { number: 88, question: "How to empty a vector in C++?" },
  { number: 89, question: "How to initialize a 2D vector in C++?" },
  { number: 90, question: "What is containership in C++?" },
  {
    number: 91,
    question:
      "How to call a base class constructor from a derived class in C++?",
  },
  { number: 92, question: "What is modularity in C++?" },
  { number: 93, question: "What is copy constructor in C++?" },
  { number: 94, question: "How to write a class in C++?" },
  { number: 95, question: "What is this pointer?" },
  { number: 96, question: "How is data hiding achieved in C++?" },
  {
    number: 97,
    question: "What is the role of the file opening mode ios::trunc in C++?",
  },
  { number: 98, question: "What is an inline function in C++?" },
  { number: 99, question: "What is a static member function in C++?" },
  { number: 100, question: "What is a pure virtual function in C++?" },
  {
    number: 101,
    question:
      "What are the different methods for passing parameters to functions in C++?",
  },
  {
    number: 102,
    question:
      "What is the difference between variable declaration and variable definition in C++?",
  },
  {
    number: 103,
    question: "What is the purpose of the extern storage specifier in C++?",
  },
  { number: 104, question: "How to access private members of a class in C++?" },
  {
    number: 105,
    question: "What is the difference between delete and delete[] in C++?",
  },
  {
    number: 106,
    question:
      "Which operator can be used to determine the size of a data type/class or variable/object in C++?",
  },
  { number: 107, question: "Who designed the C++ programming language?" },
  { number: 108, question: "What is the remainder for 5.0 % 2 in C++?" },
  {
    number: 109,
    question: "What is the purpose of the #undef preprocessor in C++?",
  },
  { number: 110, question: "What are the basic operations of a stack in C++?" },
  { number: 111, question: "What is conio.h in C++?" },
  { number: 112, question: "What is an iterator in C++?" },
  { number: 113, question: "What is an expression in C++?" },
  { number: 114, question: "What is an exception in C++?" },
  { number: 115, question: "What is runtime polymorphism in C++?" },
  {
    number: 116,
    question: "What is type erasure in C++ and how is it implemented?",
  },
  { number: 117, question: "What is meant by RAII in the context of C++?" },
  {
    number: 118,
    question:
      "What is the difference between early binding and late binding in C++?",
  },
  { number: 119, question: "What are the advantages of using RAII in C++?" },
  {
    number: 120,
    question:
      "What is the difference between shallow copy and deep copy in C++?",
  },
  {
    number: 121,
    question: "What are the different types of preprocessor directives in C++?",
  },
  {
    number: 122,
    question: "What are the advantages and disadvantages of recursion in C++?",
  },
  {
    number: 123,
    question:
      "What are the main differences between a list and a vector in C++?",
  },
  { number: 124, question: "How does one achieve polymorphism in C++?" },
  { number: 125, question: "How does one achieve modularity in C++?" },
  { number: 126, question: "How does one perform exception handling in C++?" },
  { number: 127, question: "How does one manage dynamic memory in C++?" },
  {
    number: 128,
    question: "What is the purpose of the keyword typedef in C++?",
  },
  { number: 129, question: "How does one perform type casting in C++?" },
  {
    number: 130,
    question: "What is the purpose of the keyword constexpr in C++?",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const questionsContainer = document.getElementById("questions-container");
  const questionCount = document.getElementById("question-count");
  const scrollToTopButton = document.getElementById("scroll-to-top");

  let lastScrollTop = 0;
  window.addEventListener(
    "scroll",
    function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        document.getElementById("header").classList.add("hidden");
      } else {
        document.getElementById("header").classList.remove("hidden");
      }
      lastScrollTop = st <= 0 ? 0 : st;

      if (st > 300) {
        scrollToTopButton.classList.add("show");
      } else {
        scrollToTopButton.classList.remove("show");
      }
    },
    false
  );

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  questionCount.textContent = `Total Questions: ${questions.length}`;

  questions.forEach((q, index) => {
    const questionBlock = document.createElement("li");

    const questionHeader = document.createElement("div");
    questionHeader.className = "collapsible-header";

    const questionTitle = document.createElement("h5");
    questionTitle.textContent = `${q.number}. ${q.question}`;
    questionHeader.appendChild(questionTitle);

    const checkboxesHeader = document.createElement("div");
    checkboxesHeader.className = "checkbox-container";

    const completedCheckboxHeader = document.createElement("label");
    completedCheckboxHeader.innerHTML = `
                <input type="checkbox" ${
                  getQuestionProperty(q.number, "completed") ? "checked" : ""
                }>
                <span>Completed</span>
            `;
    completedCheckboxHeader
      .querySelector("input")
      .addEventListener("click", (event) => {
        setQuestionProperty(q.number, "completed", event.target.checked);
        event.stopPropagation();
      });
    completedCheckboxHeader
      .querySelector("span")
      .addEventListener("click", (event) => {
        event.stopPropagation();
      });
    checkboxesHeader.appendChild(completedCheckboxHeader);

    const revisedCheckboxHeader = document.createElement("label");
    revisedCheckboxHeader.innerHTML = `
                <input type="checkbox" ${
                  getQuestionProperty(q.number, "revised") ? "checked" : ""
                }>
                <span>Revised</span>
            `;
    revisedCheckboxHeader
      .querySelector("input")
      .addEventListener("click", (event) => {
        setQuestionProperty(q.number, "revised", event.target.checked);
        event.stopPropagation();
      });
    revisedCheckboxHeader
      .querySelector("span")
      .addEventListener("click", (event) => {
        event.stopPropagation();
      });
    checkboxesHeader.appendChild(revisedCheckboxHeader);

    questionHeader.appendChild(checkboxesHeader);

    const collapsibleBody = document.createElement("div");
    collapsibleBody.className = "collapsible-body";

    const editorContainer = document.createElement("div");
    editorContainer.id = `editor-${index}`;
    editorContainer.className = "quill-editor";
    collapsibleBody.appendChild(editorContainer);

    questionBlock.appendChild(questionHeader);
    questionBlock.appendChild(collapsibleBody);
    questionsContainer.appendChild(questionBlock);

    const quill = new Quill(`#editor-${index}`, {
      theme: "snow",
    });
    quill.root.innerHTML = getQuestionProperty(q.number, "answer") || "";
    quill.on("text-change", () => {
      setQuestionProperty(q.number, "answer", quill.root.innerHTML);
    });
  });

  M.Collapsible.init(document.querySelectorAll(".collapsible"));

  loadFromLocalStorage();

  function setQuestionProperty(number, property, value) {
    const questionsState =
      JSON.parse(localStorage.getItem("questionsState")) || {};
    if (!questionsState[number]) {
      questionsState[number] = {};
    }
    questionsState[number][property] = value;
    localStorage.setItem("questionsState", JSON.stringify(questionsState));
  }

  function getQuestionProperty(number, property) {
    const questionsState =
      JSON.parse(localStorage.getItem("questionsState")) || {};
    return questionsState[number]
      ? questionsState[number][property]
      : property === "completed" || property === "revised"
      ? false
      : "";
  }

  function loadFromLocalStorage() {
    const savedQuestionsState =
      JSON.parse(localStorage.getItem("questionsState")) || {};
    Object.keys(savedQuestionsState).forEach((number) => {
      const questionState = savedQuestionsState[number];
      const index = questions.findIndex((q) => q.number == number);

      if (index >= 0) {
        const completedCheckboxes = document.querySelectorAll(
          `li:nth-child(${
            index + 1
          }) .checkbox-container label:nth-child(1) input`
        );
        const revisedCheckboxes = document.querySelectorAll(
          `li:nth-child(${
            index + 1
          }) .checkbox-container label:nth-child(2) input`
        );
        const editor = document.querySelector(`#editor-${index} .ql-editor`);

        completedCheckboxes.forEach(
          (checkbox) => (checkbox.checked = questionState.completed)
        );
        revisedCheckboxes.forEach(
          (checkbox) => (checkbox.checked = questionState.revised)
        );
        editor.innerHTML = questionState.answer || "";
      }
    });
  }
});
