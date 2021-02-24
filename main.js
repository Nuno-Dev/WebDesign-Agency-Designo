let burguer = document.getElementById('burguer');
let close_burguer = document.getElementById('close-burguer');
let nav = document.getElementById('mobile-nav-dropdown');
let body = document.getElementsByTagName('body')[0];

burguer.addEventListener('click', function () {
  nav.classList.toggle('hide');
  body.classList.toggle('stop-scrolling');
  burguer.style.display = 'none';
  close_burguer.style.display = 'flex';
});

close_burguer.addEventListener('click', function () {
  nav.classList.toggle('hide');
  body.classList.toggle('stop-scrolling');
  burguer.style.display = 'flex';
  close_burguer.style.display = 'none';
});
