const hum = document.querySelector(".hamburger");
const nav = document.querySelector(".links-sm");

hum.addEventListener("click", () => {
  nav.classList.toggle("active");
});
