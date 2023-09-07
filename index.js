let input = document.getElementById("result");
let btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    const btnValue = btns[i].textContent.trim(); // Trim whitespace
    if (btnValue === "C") {
      ClearScreen();
    } else if (btnValue === "=") {
      calculateRes();
    } else {
      appendValue(btnValue);
    }
  });
}

function ClearScreen() {
  input.value = "";
}

function calculateRes() {
  input.value = eval(input.value);
}

function appendValue(value) {
  input.value += value;
}
