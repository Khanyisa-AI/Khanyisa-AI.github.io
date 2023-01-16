
const body = document.querySelector('body');
const hamButton = document.querySelector('.ham');
const cvButton = document.querySelector(".btn")
const menuList = document.querySelectorAll('li')
const menu = document.querySelector('.navbar ul');

const handleClick = (evt) => {
  
  if (evt.target.id === 'hamId') {
    menu.classList.add('menuDisplay');
    body.classList.add('no-scroll');
    hamButton.classList.toggle('hide');
    closeButton.classList.toggle('display');
  }
  if (evt.target.classList.contains('list')) {
    if (menu.classList.contains('menuDisplay')) {
      hamButton.classList.toggle('hide', false);
      menu.classList.remove('menuDisplay');
      closeButton.classList.toggle('display');
      body.classList.remove('no-scroll');
    }
  }


};

document.addEventListener('click', handleClick);
