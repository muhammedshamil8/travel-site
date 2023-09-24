// import { review } from '../data/review';
// import { packages } from '../data/package';


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
             <button class="js-destination">Details $</button>
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
        <img src="rating-50.png" alt="ratings">
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



function navSection() {
    const nav = document.querySelector('.js-nav-section');
    const harmburger = document.querySelector('.js-harmburger');

    // Toggle the nav section
    if (nav.style.display === "block") {
        nav.style.display = "none";
        harmburger.classList.remove('rotate');
        harmburger.innerHTML = ` <img class="harmbur-img" src="images/hamburger-menu.svg" onclick="navSection();">`;
    } else {
        nav.style.display = "block";
        harmburger.classList.add('rotate');
        harmburger.innerHTML = ` <img class="cross-img" src="images/cross.png" onclick="navSection();">`;
    }
};

let originalContent = '';

function setupSignupButtonListener() {
    // Attach the event listener to the signup button
    const signupButton = document.querySelectorAll('.js-signup');
    signupButton.forEach(button => {
        button.addEventListener('click', () => {
            console.log('hyyy workking');

            // Store the original content
            if (!originalContent) {
                originalContent = document.body.innerHTML;
            }

            document.body.innerHTML = `
                <div class="signup-body">
    <div class="bg-signup-container">
        <img class="signup-bg" src="images/signup-bg.jpg" alt="Background Image">
        <div class="overlay2"></div>
    </div>
    
    <div class="logo-signup">
    <a href="index.html" onClick="original();">
    <div class="logo-signup">

        <p>TripolizCz</p>
        <img src="images/plane.png" class="icon-plane" alt="logo">
        </div>
        </a>
   </div> 

    <div class="main-signup-layout">
    <div class="signup-content-flex">

    <div class="signup-content">
        <p class="p1">Start for free</p>
        <h2><b>Create new account<span>.</span></b></h2>
        <p>Already have an account? <a href="#">Log in</a></p>
    </div>

    <form action="signup_process.php" method="post">
        <input type="text" placeholder="First Name" name="firstname" id="firstname">
        <input type="text" placeholder="Last Name" name="lastname" id="lastname"><br>
        <input type="email" placeholder="Email or Mobile Number" name="email" id="email"><br>
        <input type="password" id="password" name="password" placeholder="Password" required><br><br>

        <button type="submit" class="form-btn1 js-signup">Change Method</button>&nbsp;
        <button type="submit" class="js-signup">Create Account</button>
    </form><br>
</div>
</div>
</div>

    `;
            // <button onClick="original();" class="back-btn">&nbsp; &gt; &nbsp;</button>

            // const backButton = document.getElementById('backButton');
            // backButton.addEventListener('click', () => {
            //     original();
            // });
        });

    });
};

// Initial setup of event listener for signup button
setupSignupButtonListener();
/*
function original() {
    if (originalContent) {
        document.body.innerHTML = originalContent;
        // Reattach the event listener after going back to the original content
        setupSignupButtonListener();
    } else {
        console.log('No original content found.');
    }
}
*/
function DestinationListener() {
    // Attach the event listener to the destination button
    const DestinationButton = document.querySelectorAll('.js-destination');
    DestinationButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            console.log('Destination button clicked for package:', packages[index].place);

            // Store the original content
            if (!originalContent) {
                originalContent = document.body.innerHTML;
            }

            document.body.innerHTML = `
                <div class="content-package-layout">
                &nbsp;&nbsp;&nbsp;go Home
                        <a href="index.html" class="logopackage">
                            <img src="images/plane.png" class="icon-plane-package" alt="logopackage">
                    <p> TripolizCz  </p>

                    </a>
                    <div class="content-package-img">
                        <img src="${packages[index].image}" alt="Package Image">
                    </div>
                    <div class="content-package-details">
                        <h2>${packages[index].place}</h2>
                        <p>${packages[index].about}</p>
                        <p>${packages[index].about}</p>
                        <div class="bottom-package-content">
                            <button>Book Now</button>
                            <h3>
                                $${packages[index].priceRupees} Rs<span>/per person</span>
                            </h3>
                        </div>
                    </div>
                </div>
            `;

            // const backButton = document.getElementById('HomeButton');
            // backButton.addEventListener('click', () => {
            //     original2();
            // });
        });
    });
}

// Initial setup of event listener for destination button
DestinationListener();

/*
function setupBackButtonListener() {
    // Attach the event listener to the back button
    const backButton = document.querySelector('.back-btn');
    backButton.addEventListener('click', () => {
        console.log('Back button clicked');

        if (originalContent) {
            document.body.innerHTML = originalContent;
            // Reattach the event listener after going back to the original content
            DestinationListener();
        } else {
            console.log('No original content found.');
        }
    });
}

// Initial setup of event listener for back button
setupBackButtonListener();

*/
