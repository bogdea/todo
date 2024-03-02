document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

  function addItem() {
    const textInput = document.querySelector(".text-input");

    if (textInput.value !== "") {
      const ul = document.querySelector("ul");
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
      li.innerHTML += textInput.value + "";
      li.appendChild(circleCheck);

      // delete task
      deleteTask.classList.add("fa-regular", "fa-trash-can");
      deleteTask.addEventListener("click", deleteItem);
      li.appendChild(deleteTask);
      ul.appendChild(li);

      textInput.value = "";
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addItem();
  });

  function toggleIcon(event) {
    event.target.classList.toggle("fa-regular");
    event.target.classList.toggle("fa-solid");

    const li = event.target.parentElement;
    if (event.target.classList.contains("fa-solid")) {
      li.classList.add("line-through");
    } else {
      li.classList.remove("line-through");
    }
  }

  function deleteItem(event) {
    const li = event.target.parentElement;
    li.remove();
  }

  let typed = new Typed(".text-animation", {
    strings: ["WRITE YOUR TASKS"],
    typeSpeed: 50,
  });
});

// dark mode
const themeToggle = document.querySelector("#theme-toggle");
const themeIndicator = document.querySelector("#theme-indicator");

themeToggle.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("#theme-indicator").classList.toggle("left-0");
  document.querySelector("#theme-indicator").classList.toggle("right-0");
});
