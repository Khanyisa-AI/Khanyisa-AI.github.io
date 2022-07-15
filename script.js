const body = document.querySelector('body');
const hambutton = document.querySelector('.ham');
const closebutton = document.querySelector('.close');

const handleclick = (evt) => {
  const menu = document.querySelector('.navbar ul');
  if (evt.target.id === 'hamId') {
    menu.classList.add('menuDisplay');
    body.classList.add('no-scroll');
    hambutton.classList.toggle('hide');
    closebutton.classList.toggle('display');
  }

  if (evt.target.id === 'list') {
    if (menu.classList.contains('menuDisplay')) {
      hambutton.classList.toggle('hide', false);
      menu.classList.remove('menuDisplay');
      closebutton.classList.toggle('display');
    }
  }

  if (evt.target.id === 'closeId') {
    if (menu.classList.contains('menuDisplay')) {
      menu.classList.remove('menuDisplay');
      hambutton.classList.toggle('hide', false);
      closebutton.classList.toggle('display', false);
    }
  }
};

document.addEventListener('click', handleclick);
