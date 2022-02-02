function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll(".slide-in");
function checkSlide(e) {
  sliderImages.forEach((slideImages) => {
    const slideInAt =
      window.scrollY + window.innerHeight - slideImages.height / 2;
    const imageButtom = slideImages.offsetTop + slideImages.height;
    const isHalfShow = slideInAt > slideImages.offsetTop;
    const isNotScrolledPast = window.scrollY < imageButtom;
    if (isHalfShow && isNotScrolledPast) {
      slideImages.classList.add("active");
    } else {
      slideImages.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
