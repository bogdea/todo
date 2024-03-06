document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");

  form.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

  function addItem() {
    const textInput = document.querySelector(".text-input");

    if (textInput.value !== "") {
      const li = document.createElement("li");
      const circleCheck = document.createElement("i");
      const deleteTask = document.createElement("i");

      // circle check
      circleCheck.classList.add(
        "fa",
        "fa-sharp",
        "fa-regular",
        "fa-circle-check"
      );
      circleCheck.addEventListener("click", toggleIcon);
      li.innerHTML = textInput.value + " ";
      li.appendChild(circleCheck);

      // delete task
      deleteTask.classList.add("fa-regular", "fa-trash-can");
      deleteTask.addEventListener("click", deleteItem);
      li.appendChild(deleteTask);

      ul.appendChild(li);

      saveToLocalStorage();

      textInput.value = "";
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addItem();
  });

  function toggleIcon(event) {
    const circleCheck = event.target;

    circleCheck.classList.toggle("fa-solid");
    circleCheck.classList.toggle("fa-regular");

    const li = circleCheck.parentElement;

    if (circleCheck.classList.contains("fa-solid")) {
      li.classList.add("line-through");
    } else {
      li.classList.remove("line-through");
    }

    saveToLocalStorage();
  }

  function deleteItem(event) {
    const li = event.target.parentElement;
    li.remove();

    saveToLocalStorage();
  }

  // dark mode functionality

  const themeToggle = document.querySelector("#theme-toggle");

  themeToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("#theme-indicator").classList.toggle("left-0");
    document.querySelector("#theme-indicator").classList.toggle("right-0");

    saveDarkModeState();
  });

  const loadDarkModeState = () => {
    const darkModeState = localStorage.getItem("darkModeState");
    if (darkModeState) {
      const isDarkMode = JSON.parse(darkModeState);
      document.querySelector("body").classList.toggle("dark", isDarkMode);
      document
        .querySelector("#theme-indicator")
        .classList.toggle("left-0", isDarkMode);
      document
        .querySelector("#theme-indicator")
        .classList.toggle("right-0", !isDarkMode);
    }
  };

  // dark mode state

  const saveDarkModeState = () => {
    const isDarkMode = document
      .querySelector("body")
      .classList.contains("dark");
    localStorage.setItem("darkModeState", JSON.stringify(isDarkMode));
  };

  loadDarkModeState();

  const loadFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => {
      const li = document.createElement("li");
      const circleCheck = document.createElement("i");
      const deleteTask = document.createElement("i");

      li.innerHTML = task.text + " ";
      circleCheck.classList.add(
        "fa",
        "fa-sharp",
        "fa-regular",
        "fa-circle-check"
      );

      if (task.isChecked) {
        circleCheck.classList.add("fa-solid");
        li.classList.add("line-through");
      }

      circleCheck.addEventListener("click", toggleIcon);
      li.appendChild(circleCheck);

      deleteTask.classList.add("fa-regular", "fa-trash-can");
      deleteTask.addEventListener("click", deleteItem);
      li.appendChild(deleteTask);

      ul.appendChild(li);
    });
  };

  loadFromLocalStorage();

  // typed js animation
  let typed = new Typed(".text-animation", {
    strings: ["WRITE YOUR TASKS"],
    typeSpeed: 50,
    showCursor: false,
  });
});

// local storage
const saveToLocalStorage = () => {
  const tasks = [];
  const lis = document.querySelectorAll("ul li");

  lis.forEach((li) => {
    const circleCheck = li.querySelector(".fa-circle-check");

    const task = {
      text: li.innerText.trim(),
      isChecked: li.classList.contains("line-through"),
    };

    tasks.push(task);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
};
