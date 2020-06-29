const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

document.addEventListener("DOMContentLoaded", () => {
  let storedNumber = generateRandomNumber();

  document.querySelector("#reset").addEventListener("click", (event) => {
    storedNumber = generateRandomNumber();
    document.querySelector("#result").innerText = "";
    document.querySelector("#number").style.display = "block";
    document.querySelector("#number").value = "";
    document.querySelector("#submit").style.display = "block";
    document.querySelector("#reset").style.display = "none";
  });

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let inputNumber = parseInt(document.querySelector("#number").value);

    if (isNaN(inputNumber)) {
      alert("Please enter a Number");
      return;
    }

    console.log(inputNumber, storedNumber);
    console.log(inputNumber === storedNumber);
    if (inputNumber === storedNumber) {
      document.querySelector("#result").innerText = "Yay! You guessed it!! 🎉";
      document.querySelector("#number").style.display = "none";
      document.querySelector('input[type="submit"]').style.display = "none";
      document.querySelector("button").style.display = "block";
    } else {
      document.querySelector("#result").innerText =
        "Wrong answer😛 ! Try again";
      document.querySelector("#number").value = "";
      document.querySelector("button").style.display = "block";
    }
  });
});
