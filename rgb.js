const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const rgb = getRandomRgb();
  console.log(rgb);

  color.textContent = rgb;
  document.body.style.backgroundColor = rgb;
});

function getRandomRgb() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}
