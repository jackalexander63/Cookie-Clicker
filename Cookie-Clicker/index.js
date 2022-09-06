let coolFactor = 0;
const increaseCoolness = () => {
  coolFactor += 1;
  const coolFactorElemArr = [...document.getElementsByClassName("coolCounter")];
  const coolFactorElem = coolFactorElemArr[0];
  coolFactorElem.innerHTML = `Your Cool Factor: ${coolFactor}`;
};
setInterval(() => {
  increaseCoolness();
}, 2000);

const buttonContainer = document.getElementById("coolButton");
buttonContainer.addEventListener("click", () => {
  increaseCoolness();
});
