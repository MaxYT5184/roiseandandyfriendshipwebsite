// script.js
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').classList.remove('hidden');
  }, 3000);
});
