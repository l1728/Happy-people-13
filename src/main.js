AOS.init({once: true});
let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.mobile-menu');
let backdrop = document.querySelector('.mobile-menu-backdrop');
let menuItem = document.querySelectorAll('.close-menu');
let body = document.body;

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    backdrop.style.display = menu.classList.contains('active')
      ? 'block'
      : 'none';
    body.classList.toggle('no-scroll', menu.classList.contains('active'));
  });

  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      menu.classList.toggle('active');
      backdrop.style.display = 'none';
      body.classList.remove('no-scroll');
    });
  });

  backdrop.addEventListener('click', function () {
    menu.classList.remove('active');
    backdrop.style.display = 'none';
    body.classList.remove('no-scroll');
  });
}

// scroll to top

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});
