// popup.js

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popupMessage');
    
    // Check if the device is mobile or tablet
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Display the pop-up if the device is mobile
    if (isMobile) {
        popup.style.display = 'block';
    }
});