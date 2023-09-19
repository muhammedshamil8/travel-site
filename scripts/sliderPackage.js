const slider = document.querySelector('.package-card-grid');
const arrowBtns = document.querySelectorAll('.package-card-grid-parent i');
const firstCardwidth = slider.querySelector(".package-card").offsetWidth + 50 ;

let isDragging = false ,startX,startScrollLeft;


arrowBtns.forEach( (btn) => {
  btn.addEventListener("click" ,()=>{
     slider.scrollLeft += btn.id === "left" ? -firstCardwidth : firstCardwidth;
  });
});
const  dragStart = (e)=>{
     isDragging = true;
     slider.classList.add("dragging");
     startX = e.pageX;
     startScrollLeft = slider.scrollLeft;
}
const dragging = (e) =>{
     if(!isDragging) return; 
     slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = ()=>{
     isDragging = false;
     slider.classList.remove("dragging")
}
slider.addEventListener('mousedown',dragStart);
slider.addEventListener('mousemove',dragging);
document.addEventListener('mouseup',dragStop);

