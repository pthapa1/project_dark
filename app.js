const menuCanvas = document.querySelector('.menuCanvas');
const menuButton = document.querySelector('.menu');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const menuList = document.querySelector('.nav-container');

menuButton.addEventListener('click', () => {
  menuCanvas.classList.toggle('showCanvas');

  // Now rotate these lines when you click on the button.
  line1.classList.toggle('line-1-active');
  line2.classList.toggle('line-2-active');
  line3.classList.toggle('line-3-active');

  // disable hover from the menu when active
  menuButton.classList.toggle('button-clear');
  // make the menu list active when the button is clicked
  menuList.classList.toggle('nav-container-active');
});

//close the menu when any menu link is clicked.

const menuLinks = document.querySelectorAll('.list-item');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuCanvas.classList.toggle('showCanvas');

    line1.classList.toggle('line-1-active');
    line2.classList.toggle('line-2-active');
    line3.classList.toggle('line-3-active');

    menuButton.classList.toggle('button-clear');
    menuList.classList.toggle('nav-container-active');
  });
});
