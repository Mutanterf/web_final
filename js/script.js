document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var appointmentTime = document.getElementById('appointmentTime').value;
    
    var errorSound = document.getElementById('errorSound');
    var successSound = document.getElementById('successSound');
    
    if (fullName === '' || phone === '' || email === '' || appointmentTime === '') {
        errorSound.play();
        alert('Please fill out all required fields.');
    } else {
        successSound.play();
        alert('Appointment successfully made.');
    }
});
