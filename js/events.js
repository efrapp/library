function initFAB() {
  const elems = document.querySelectorAll('.fixed-action-btn');
  M.FloatingActionButton.init(elems, {
    direction: 'left',
  });
}

function initTooltip() {
  const elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems, {
    exitDelay: 200,
  });
}

function btnRemoveEvent() {
  document.querySelectorAll('.remove-book').forEach((el) => {
    el.addEventListener('click', (e) => {
      removeBookFromLibrary(e.target.getAttribute('value'));
    });
  });
}

function btnUpdateStatusEvent() {
  document.querySelectorAll('.update-read').forEach((el) => {
    el.addEventListener('click', (e) => {
      updateReadStatus(e.target.getAttribute('value'));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // initFAB();
  // btnRemoveEvent();
});
