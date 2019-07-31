document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.fixed-action-btn');
  const instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
  });
});
