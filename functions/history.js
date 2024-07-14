const transaction = [
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '-2000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '+2000', status: '', product: 'Mtn' },
    { service: 'Data Purchase', date: '10th April 2024', time: '1:24am', amount: '-2000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '+7000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '+2000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '-2000', status: '', product: 'Mtn' },
    { service: 'Data Purchase', date: '10th April 2024', time: '1:24am', amount: '+2000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '+4000', status: '', product: 'Mtn' },
    { service: 'Airtime Purchase', date: '10th April 2024', time: '1:24am', amount: '-2000', status: '', product: 'Mtn' },
];

const history = document.getElementById('history');
const modal = document.getElementById('receipt');
const closeBtn = document.getElementById('closeBtn');
const modalService = document.getElementById('service');
const modalProduct = document.getElementById('product');
const receiptDate = document.getElementById('receiptDate');
const receiptTime = document.getElementById('receiptTime');
const receiptAmount = document.getElementById('receiptAmount');
const receipt = document.getElementById('receiptModal');

transaction.forEach(his => {
    if (his.amount.startsWith('+')) {
        his.status = 'credit';
    } else if (his.amount.startsWith('-')) {
        his.status = 'debit';
    }

    const subChild = document.createElement('div'); 
    subChild.className = 'transaction modalBtn'; // Add 'modalBtn' class

    const child = document.createElement('div');
    child.className = 'child';
    const img = document.createElement('img')
    img.src = './assets/icons/successIcon.png';
    img.alt = 'success icon';
    const detail = document.createElement('div')
    detail.className = 'detail';

    const p = document.createElement('p')
    p.textContent = his.service
    const date = document.createElement('span')
    date.textContent = `${his.date}, `
    const time = document.createElement('span')
    time.textContent = his.time

    const amount = document.createElement('h3')
    amount.textContent = his.amount
    amount.className = his.status

    detail.appendChild(p)
    detail.appendChild(date)
    detail.appendChild(time)
    child.appendChild(img)
    child.appendChild(detail)
    subChild.appendChild(child)
    subChild.appendChild(amount)
    history.appendChild(subChild);  

    // Add click event listener to subChild
    subChild.addEventListener('click', () => {
        modal.style.display = 'block';

        modalService.textContent = his.service;
        modalProduct.textContent = his.product;
        receiptDate.textContent = his.date;
        receiptTime.textContent = his.time;
        receiptAmount.textContent = `NGN ${his.amount}.00`;

        if (his.status === 'credit') {
            receiptAmount.style.color = '#289B4F';
            receipt.style.background = '#F6FFFA';  // Assuming this is the background color for credit transactions
        } else {
            receiptAmount.style.color = '#FF5353';
            receipt.style.background = '#FFF6F6';
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
