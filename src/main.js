let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.mobile-menu');
let menuItem = document.querySelectorAll('.close-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });

  menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });
}
