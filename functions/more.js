option = [
    { imgSrc: "./assets/icons/paybills.png", alt: "Hello", path: "#", text: "Pay bills", },
    { imgSrc: "./assets/icons/topup.png", alt: "Hello", path: "#", text: "Topup", },
    { imgSrc: "./assets/icons/withdraw.png", alt: "Hello", path: "#", text: "Withdraw", },
    { imgSrc: "./assets/icons/analytics.png", alt: "Hello", path: "#", text: "Analytics", },
    { imgSrc: "./assets/icons/help.png", alt: "Hello", path: "#", text: "Help", },
    { imgSrc: "./assets/icons/contact.png", alt: "Hello", path: "#", text: "Contact us", },
    { imgSrc: "./assets/icons/about.png", alt: "Hello", path: "#", text: "About", },
]

const more = document.getElementById('more')

option.forEach(item => {
    const subChild = document.createElement('a')
    subChild.href = item.path
    subChild.className = 'subChild'

    const child = document.createElement('div')
    child.className = 'child'
    const img = document.createElement('img')
    img.src = item.imgSrc;
    img.alt = item.alt;
    const p = document.createElement('p')
    p.textContent = item.text

    child.appendChild(img)
    child.appendChild(p)

    const icon = document.createElement('img')
    icon.src = './assets/icons/nextIcon.png';
    icon.alt = item.alt
    icon.className = 'icon'

    subChild.appendChild(child)
    subChild.appendChild(icon)

    more.appendChild(subChild)
})