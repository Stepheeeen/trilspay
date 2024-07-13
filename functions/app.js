function loadLauncher() {
    setTimeout(() => {
        window.location.href = 'index2.html'; // Redirect to the login page
    }, 3000); // 3 seconds delay
}

document.addEventListener('DOMContentLoaded', loadLauncher);