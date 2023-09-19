document.addEventListener("DOMContentLoaded", function () {
     const slider = document.querySelector(".experience-card-grid");
     const arrowBtns = document.querySelectorAll(".experience-card-grid-parent i");
     const firstCardwidth = slider.querySelector(".experience-card").offsetWidth;
   
     let isDragging = false,
       startX,
       startScrollLeft;
   
     arrowBtns.forEach((btn) => {
       btn.addEventListener("click", () => {
         slider.scrollLeft += btn.id === "right" ? firstCardwidth : -firstCardwidth;
       });
     });
   
     const dragStart = (e) => {
       isDragging = true;
       slider.classList.add("dragging");
       startX = e.pageX;
       startScrollLeft = slider.scrollLeft;
     };
   
     const dragging = (e) => {
       if (!isDragging) return;
       slider.scrollLeft = startScrollLeft - (e.pageX - startX);
     };
   
     const dragStop = () => {
       isDragging = false;
       slider.classList.remove("dragging");
     };
   
     slider.addEventListener("mousedown", dragStart);
     slider.addEventListener("mousemove", dragging);
     document.addEventListener("mouseup", dragStop);
   });
   