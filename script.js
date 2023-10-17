"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    console.log("Button Clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    // modal.style.display("block");  Another way of showing modal box.
  });
}

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Keyboard events are also called global events.
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape")
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
});
