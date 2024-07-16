const resendBtn = document.getElementById('resendBtn');
resendBtn.addEventListener('click', function() {
    const countdownElement = document.getElementById('countdown');
    let countdown = 30;
    
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            resendBtn.disabled = false;
            resendBtn.textContent = 'Resend OTP';
        }
    }, 1000);
    
    resendBtn.addEventListener('click', function() {
        // Logic to resend OTP goes here

        // Restart countdown
        countdown = 30;
        resendBtn.disabled = true;
        resendBtn.textContent = `Resend OTP (<span id="countdown">30</span>s)`;
        const newTimer = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            
            if (countdown <= 0) {
                clearInterval(newTimer);
                resendBtn.disabled = false;
                resendBtn.textContent = 'Resend OTP';
            }
        }, 1000);
    });
});
