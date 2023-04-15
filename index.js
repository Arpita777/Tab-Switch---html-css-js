// Import stylesheets
import './style.css';

const tabs = document.querySelectorAll('h5');
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((item) => {
      if (item != tab) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
    const content = document.querySelector('.content');
    const p = content.querySelectorAll('p');
    p.forEach((item, index2) => {
      if (index !== index2) {
        item.classList.remove('show');
      } else {
        item.classList.add('show');
        item.style.backgroundColor = item.dataset.color + '';
      }
    });
  });
});
