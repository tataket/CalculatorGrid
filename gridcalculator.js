const buttons = document.querySelectorAll(".alldivs button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleButtonClick(e.target.innerText);
    //console.log(e.target.innerText);
  });
});

function handleButtonClick(value) {
  const display = document.getElementById("display");

  if (value === "=") {
    try {
      display.value = new Function("return " + display.value)();
    } catch (error) {
      display.value = "Error";
    }
  } else if (value === "C") {
    display.value = "";
  } else {
    display.value += value;
  }
}
