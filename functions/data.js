const data = [
    { name: 'nikadem ent', phone: '8268024400', location: 'MONIE POINT', imgSrc: './assets/images/Moniepoint.png', alt: 'Bank Image' },
    { name: 'MFY / JUMIAPAY-JUM', phone: '9024653526', location: 'Palmpay', imgSrc: './assets/images/Palmpay.png', alt: 'Bank Image' },
    { name: 'Bankole Ayomide', phone: '8043265746', location: 'Opay', imgSrc: './assets/images/Opay.png', alt: 'Bank Image' },
];

const recentContainer = document.getElementById('recent');

data.forEach(item => {
    // Create the info div
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';

    // Create the text div
    const textDiv = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = item.name;
    const span1 = document.createElement('span');
    span1.textContent = item.phone;
    const span2 = document.createElement('span');
    span2.textContent = item.location;
    textDiv.appendChild(p);
    textDiv.appendChild(span1);
    textDiv.appendChild(span2);

    // Create the circle div with image
    const circleDiv = document.createElement('div');
    circleDiv.className = 'circle';
    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.alt;
    circleDiv.appendChild(img);

    // Append textDiv and circleDiv to infoDiv
    infoDiv.appendChild(textDiv);
    infoDiv.appendChild(circleDiv);

    // Append infoDiv to recentContainer
    recentContainer.appendChild(infoDiv);
});
