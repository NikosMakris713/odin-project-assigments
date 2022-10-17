const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementsByClassName('game-info');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
for (let i = 0; i < btn.length; i += 1) {
  btn[i].onclick = () => {
    modal.style.display = 'grid';
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
