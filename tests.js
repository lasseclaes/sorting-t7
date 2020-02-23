const template = document.querySelector("template").content;
deck.forEach(card => {
  const copy = template.cloneNode(true);
  copy.querySelector("h1").innerHTML = card.value + card.suit;
  copy.querySelector(".flip-card").dataset.cardvalue = card.value
  document.querySelector(".ex1").appendChild(copy);
})
const test = function () {
  let counter = 0;
  const intID = setInterval(() => {
    counter++;
    document.querySelectorAll(`[data-cardvalue="${counter}"]`).forEach(card => {
      card.classList.add("flipped");
    })
    if (counter === 13) {
      clearInterval(intID);
      setTimeout(validate, 500);

    }
  }, 300)

  function validate() {
    const copy = [...deck];
    copy.sort((a, b) => a.value - b.value);
    let equal = true;
    for (let i = 0; i < copy.length; i++) {
      if (deck[i].value != copy[i].value) {
        equal = false;
        break;
      }
    }
    if (!equal) {
      document.body.innerHTML = "EPIC FAIL!!!"
    } else {
      document.body.innerHTML = "EPIC WIN!!!"
    }
  }
}
