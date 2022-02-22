const colors = [
  "#05C0ED",
  "#1DF705",
  "#E0B507",
  "#F73D05",
  "#c203e5",
  "#B208F0",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number betwen 0-5
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
