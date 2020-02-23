class FLIP {
  constructor(el) {
    this.el = el;
    this.first = null;
    this.last = null;
  }
  logInitialPosition() {
    this.first = this.el.getBoundingClientRect();
  }
  logFinalPosition() {
    this.last = this.el.getBoundingClientRect();
  }
  animate(duration, delay) {
    const deltaX = this.first.left - this.last.left;
    const deltaY = this.first.top - this.last.top;
    this.el.animate(
      [
        {
          transformOrigin: "top left",
          transform: `translate(${deltaX}px, ${deltaY}px)`
        },
        {
          transformOrigin: "top left",
          transform: "none"
        }
      ], {
        duration: duration,
        delay: delay,
        easing: "ease-in-out",
        fill: "both"
      }
    );
  }
}
window.addEventListener("load", layOutDeck);

function layOutDeck() {
  const template = document.querySelector("template").content;
  deck.forEach((card, index) => {
    const copy = template.cloneNode(true);
    copy.querySelector("h1").innerHTML = card;
    copy.querySelector(".flip-card").dataset.cardvalue = card.split("&")[0];
    copy.querySelector(".flip-card").style.zIndex = 13 * 4 - index;
    document.querySelector(".deckStart").appendChild(copy);
  });
  dealCards();
}

function dealCards() {
  document.querySelectorAll(".deckStart>*").forEach((card, index) => {

    const x = new FLIP(card);
    x.logInitialPosition();
    document.querySelector(".ex1").appendChild(card);
    x.logFinalPosition();
    x.animate(300, index * 100);
  })
  document.querySelector("button").addEventListener("click", test)
}



function test() {
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
    copy.sort((a, b) => a - b);
    let equal = true;
    for (let i = 0; i < copy.length; i++) {
      if (deck[i] != copy[i]) {
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
