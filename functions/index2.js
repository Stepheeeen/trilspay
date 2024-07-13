document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html', 'home-icon');

    document.getElementById('home-icon').addEventListener('click', () => {
        loadPage('home.html', 'home-icon');
    });

    document.getElementById('gift-icon').addEventListener('click', () => {
        loadPage('gift.html', 'gift-icon');
    });

    document.getElementById('profile-icon').addEventListener('click', () => {
        loadPage('profile.html', 'profile-icon');
    });

    document.getElementById('transfer-icon').addEventListener('click', () => {
        loadPage('transfer.html', 'transfer-icon');
    });
});

function loadPage(page, activeIconId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            document.getElementById('content').innerHTML = xhr.responseText;
            setActiveIcon(activeIconId);
        }
    };
    xhr.send();
}

function setActiveIcon(activeIconId) {
    const icons = document.querySelectorAll('.nav-icon');
    icons.forEach(icon => {
        icon.classList.remove('active');
    });
    document.getElementById(activeIconId).classList.add('active');
}
