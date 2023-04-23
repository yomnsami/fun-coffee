const menuItems = document.querySelectorAll('.menu li');

function showMenuItems() {
  menuItems.forEach(item => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  });
}

window.addEventListener('load', showMenuItems);


