function showLoading() {
     document.getElementById('loading-overlay').style.display = 'block';
   }
   
   function hideLoading() {
     document.getElementById('loading-overlay').style.display = 'none';
   }
   
   // Simulate a delay (you would replace this with actual data fetching)
   function loadData() {
     showLoading();
     setTimeout(function() {
       // Load your content here
       // document.querySelector('.container1').innerHTML = '<p>Your content goes here</p>';
       hideLoading();
     }, 2000); // Simulate a 2-second delay
   }
   
   // Trigger the loading animation when loading content
   loadData();