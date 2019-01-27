const blogList = document.querySelector(".blog__list");
const articles = document.querySelectorAll(".article");
const links = document.querySelectorAll(".blog__link");

links[0].parentElement.classList.add("blog__item--active");

function windowScroller(reqmove, duration) {
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame
  window.requestAnimationFrame = requestAnimationFrame

  const scrollHeight = window.scrollY
  const diffY =
    scrollHeight < reqmove
      ? reqmove - scrollHeight
      : -1 * (scrollHeight - reqmove)

  const animate = (draw, duration) => {
    const start = performance.now()
    requestAnimationFrame(function move(time) {
      let timePassed = time - start
      if (timePassed > duration) timePassed = duration
      draw(timePassed)
      if (timePassed < duration) requestAnimationFrame(move)
    })
  }

  animate(timePassed => {
    window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1))
  }, duration)
}


function fixed() {
  if (blogList.parentElement.getBoundingClientRect().top <= 0) {
    blogList.classList.remove("blog__list--absolute");
    blogList.classList.add("blog__list--fixed");

  } else {
    blogList.classList.remove("blog__list--fixed");
    blogList.classList.add("blog__list--absolute");
  };
}

 function checkCurrentArticle() {
   for (let i = 0; i < articles.length; i++) {
     if (
          articles[i].getBoundingClientRect().y < 50 &&
          articles[i].getBoundingClientRect().y >
            -articles[i].getBoundingClientRect().height
        ) {
          const prevArticle = links[i].parentElement.previousElementSibling;
          const nextArticle = links[i].parentElement.nextElementSibling;

          if (prevArticle) {
            prevArticle.classList.remove("blog__item--active");
          }
          if (nextArticle) {
            nextArticle.classList.remove("blog__item--active");
          }

          links[i].parentElement.classList.add("blog__item--active");
        }
   }
 }

function toArticle(name) {
  for (let item of articles) {
    if (name === item.dataset.name) {
      let scrollPos = item.getBoundingClientRect().top + window.scrollY
      windowScroller(scrollPos, 300)
    }
  }
}

blogList.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.classList.contains("blog__link") && !e.target.parentElement.classList.contains("blog__item--active")) {
    toArticle(e.target.getAttribute("data-name"));
  }
});

fixed();

window.addEventListener("scroll", e => {
  fixed();
  checkCurrentArticle();
});