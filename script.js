const handleclick = (evt) => {
  const menu = document.querySelector('.navbar ul');
  if (evt.target.id === 'hamId') {
    menu.classList.add('menuDisplay');
  }

  if (evt.target.id === 'list') {
    if (menu.classList.contains('menuDisplay')) {
      menu.classList.remove('menuDisplay');
    }
  }

  if (evt.target.id === 'closeId') {
    if (menu.classList.contains('menuDisplay')) {
      menu.classList.remove('menuDisplay');
    }
  }
};

document.addEventListener('click', handleclick);
