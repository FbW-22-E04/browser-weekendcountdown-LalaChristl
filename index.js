
const form = document.querySelector("form");
const p = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener("submit", (e) => {
  const username = input.value;
  let today = new Date(Date.now());
  const daysLeft = 6 - today.getDay();
  e.preventDefault();

  p.textContent = `Hello ${username}. Today is ${today.toLocaleDateString(
    "en-EN",
    { weekday: "long" }
  )}. Only 2 days left until the weekend!`;

});
