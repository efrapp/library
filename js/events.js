function initFAB() {
  const elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {
    direction: 'left',
  });
}

function btnRemoveEvent() {
  document.querySelectorAll('.remove-book').forEach((el) => {
    el.addEventListener('click', (e) => {
      console.log(e.target);
      removeBookFromLibrary(e.target.getAttribute('value'));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // initFAB();
  // btnRemoveEvent();
});
