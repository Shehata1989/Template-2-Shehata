const toggleMenu = document.querySelector('.toggle-menu'),
ulLinks = document.querySelector('header nav > ul')

toggleMenu.addEventListener('click', () => {
  ulLinks.classList.toggle('active')
})

window.addEventListener('click', (e) => {
if (e.target !== ulLinks && e.target !== toggleMenu) {
  ulLinks.classList.remove('active')
}
})

// ------------------------------------------------------------
const secLanding = document.querySelector(".landing");
let imgArray = [
  "landing-1.jpg",
  "landing-2.avif",
  "landing-3.avif",
  "landing-4.avif",
];

randomImg(secLanding, imgArray);

function randomImg(element, img) {
  setInterval(() => {
    let randomNum = Math.floor(Math.random() * imgArray.length);
    element.style.backgroundImage = `url(../Image/${img[randomNum]})`;
  }, 8000);
}
// ------------------------------------------------------------
const secStats = document.querySelector(".stats"),
  span = document.querySelectorAll(".stats .box span");
let start = false;

window.addEventListener("scroll", function () {
  if (scrollY >= secStats.offsetTop - 100) {
    if (!start) {
      startCounter(span);
      start = true;
    }
  }
});

function startCounter(nums) {
  nums.forEach((element) => {
    let count = setInterval(() => {
      element.textContent++;
      if (element.textContent === element.dataset.num) {
        clearInterval(count);
      }
    }, 10 / element.dataset.num);
  });
}
// ------------------------------------------------------------

const progHolder = document.querySelector(".prog-holder"),
  div = document.querySelectorAll(".prog-holder > div");
allDiv = document.querySelectorAll(".skills > div");

window.addEventListener("scroll", function () {
  if (scrollY >= progHolder.offsetTop - 300) {
    allDiv.forEach((element) => {
      element.classList.add("active");
    });
  }
});
// ------------------------------------------------------------
