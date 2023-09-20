const slider = document.querySelector('.package-card-grid');
const arrowBtns = document.querySelectorAll('.package-card-grid-parent i');
const firstCardWidth = slider.querySelector(".package-card").offsetWidth + 15 ;

let isDragging = false;
let startX, startScrollLeft;
let touchStartX, touchScrollLeft;

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    slider.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = slider.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;

  const currentX = e.touches ? e.touches[0].pageX : e.pageX;
  const diffX = currentX - (e.touches ? touchStartX : startX);
  slider.scrollLeft = touchScrollLeft - diffX;
};

const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('touchstart', dragStart);
slider.addEventListener('touchmove', dragging);
document.addEventListener('mouseup', dragStop);
document.addEventListener('touchend', dragStop);
