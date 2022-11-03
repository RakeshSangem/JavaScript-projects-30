const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hours-hand");


function setDate() {
  const now = new Date();
  
  // Seconds
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secondsDegree}deg)`;

  // Minutes
  const mins = now.getMinutes();
  const minDegree = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;

  // Hours
  const hours = now.getHours();
  const hourDegree = ((hours / 60) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
