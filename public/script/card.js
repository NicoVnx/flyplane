document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card")
const cardc = document.querySelector(".cont-card")

    card.addEventListener("mouseover", function (event) {
      cardc.classList.remove("hide")
    });
    card.addEventListener("mouseleave", function (event) {
        cardc.classList.add("hide")
      });
});