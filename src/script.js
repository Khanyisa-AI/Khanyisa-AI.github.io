
const body = document.querySelector('body');
const hamButton = document.querySelector('.ham');
const closeButton = document.querySelector('.close');
const cvButton = document.querySelector(".btn")

const handleClick = (evt) => {
  const menu = document.querySelector('.navbar ul');
  if (evt.target.id === 'hamId') {
    menu.classList.add('menuDisplay');
    body.classList.add('no-scroll');
    hamButton.classList.toggle('hide');
    closeButton.classList.toggle('display');
  }

  if (evt.target.id === 'list') {
    if (menu.classList.contains('menuDisplay')) {
      hamButton.classList.toggle('hide', false);
      menu.classList.remove('menuDisplay');
      closeButton.classList.toggle('display');
      body.classList.remove('no-scroll');
    }
  }

  if (evt.target.id === 'closeId') {
    if (menu.classList.contains('menuDisplay')) {
      menu.classList.remove('menuDisplay');
      hamButton.classList.toggle('hide', false);
      closeButton.classList.toggle('display', false);
      body.classList.remove('no-scroll');
    }
  }
};

function downloadFile(){

}

closeButton.addEventListener('click', downloadFile)
document.addEventListener('click', handleClick);
