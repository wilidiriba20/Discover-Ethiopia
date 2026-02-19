const hum = document.querySelector(".hamburger");
const nav = document.querySelector(".links-sm");
const icon = document.querySelector(".hamburger i");

hum.addEventListener("click", () => {
  nav.classList.toggle("active");

  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times"); // for older Font Awesome
});

const modal = document.getElementById("destinationModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

const buttons = document.querySelectorAll(".card .btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".card");

    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const text = card.querySelector("p").textContent;

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalText.textContent = text;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
