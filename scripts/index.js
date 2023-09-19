let packagesHtml = '';

packages.forEach((package)=>{
     packagesHtml +=`
     <li class="package-card">
     <div class="package-image">
         <img src="${package.image}" alt="package-img" draggable="false">

     </div>
     <div class="package-card-details">
         <h2>${package.place}</h2>
         <p>${package.about}</p>
         <div class="package-details-bottom js-btn-${package.id}">
             <button onclick="processing();">Details $</button>
             <p><span class="span1">${package.priceRupees} Rs </span><span class="span2"> /per person</span></p>
         </div>

     </div>
 </li>
     `
});
document.querySelector('.js-package-grid')
.innerHTML = packagesHtml;

