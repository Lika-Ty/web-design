const collection = document.querySelector(".collections");
const categories = document.querySelector(".categories");
const navSub = document.querySelector(".nav-sub");
const btnHum = document.querySelector(".humberger");
const navLink = document.querySelector(".nav-link");

collection.addEventListener("click", () => {
    collection.classList.toggle("active");
    categories.classList.remove("active");
});

categories.addEventListener("click", () => {
    categories.classList.toggle("active");
    collection.classList.remove("active");
});
btnHum.addEventListener("click",() => {
    navLink.classList.toggle("active");
});


