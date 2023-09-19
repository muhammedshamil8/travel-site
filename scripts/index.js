let packagesHtml = '';

packages.forEach((package) => {
    packagesHtml += `
     <li class="package-card">
     <div class="package-image">
         <img src="${package.image}" alt="package-img" draggable="false">

     </div>
     <div class="package-card-details">
         <h2>${package.place}</h2>
         <p>${package.about}</p>
         <div class="package-details-bottom js-btn-${package.id}">
             <button onclick="processing();">Details $</button>
             <p><span class="span1">$${package.priceRupees} Rs </span><span class="span2"> /per person</span></p>
         </div>

     </div>
 </li>
     `
});
document.querySelector('.js-package-grid')
    .innerHTML = packagesHtml;


let reviewHtml = '';

review.forEach((review) => {
    reviewHtml += `
     <li class="experience-card">
<div class="experience-card-logo">
    <img src="${review.Image}" alt="profile-pic">
</div>
<div class="experience-card-details">
    <p class="review-p-1">
        ${review.experience}
    </p>
    <P class="review-p-2">
        <img src="/images/rating-${review.rating * 10}.png" alt="ratings">
    </P>
    <p class="review-p-3">
        ${review.name}<br><span>${review.about}</span>
    </p>

</div>
</li>
     `
});
document.querySelector('.js-experience-grid')
    .innerHTML = reviewHtml;






