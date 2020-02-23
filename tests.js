const template = document.querySelector("template").content;
deck.forEach(card => {
  const copy = template.cloneNode(true);
  copy.querySelector("h1").innerHTML = card;
  copy.querySelector(".flip-card").dataset.cardvalue = card.split("&")[0];
  document.querySelector(".ex1").appendChild(copy);
})

let counter = 0;
const intID = setInterval(() => {
  counter++;
  document.querySelectorAll(`[data-cardvalue="${counter}"]`).forEach(card => {
    card.classList.add("flipped");
  })
  if (counter === 13) {
    clearInterval(intID);
    validate();
  }
}, 300)

function validate() {

}
/*document.querySelectorAll(".ex1>*").forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("flipped");
  }, index * 50)
})*/
//create copy of deck, sort it correctly, compare the two arrays
