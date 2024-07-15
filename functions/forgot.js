const modal = document.getElementById('modal');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const closeBtn1 = document.getElementById('close1');
const closeBtn2 = document.getElementById('close2');
const modalBtn = document.getElementById('modalBtn');
const switchtoEmail = document.getElementById('toPhone');
const switchtoPhone = document.getElementById('toEmail');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn1.addEventListener('click', () => {
    modal.style.display = 'none';
});
closeBtn2.addEventListener('click', () => {
    modal.style.display = 'none';
});

switchtoEmail.addEventListener('click', () => {
    content1.style.display = 'none';
    content2.style.display = 'block';
});

switchtoPhone.addEventListener('click', () => {
    content1.style.display = 'block';
    content2.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
