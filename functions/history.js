const transaction = [
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '-2000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '+2000', status: ''},
        {service: 'Data Purchase', date: '10th April 2024', time:'1:24am', amount: '-2000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '+7000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '+2000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '-2000', status: ''},
        {service: 'Data Purchase', date: '10th April 2024', time:'1:24am', amount: '+2000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '+4000', status: ''},
        {service: 'Airtime Purchase', date: '10th April 2024', time:'1:24am', amount: '-2000', status: ''},

        ];

const history = document.getElementById('history');

transaction.forEach(his => {
         if (his.amount.startsWith('+')) {
                his.status = 'credit';
            } else if (his.amount.startsWith('-')) {
                his.status = 'debit';
            }
        
    const subChild = document.createElement('div');  // Declare subChild first
    subChild.className = 'transaction';
    subChild.id = 'modalBtn';
    
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
    history.appendChild(subChild);  // Append subChild after it's created
});


