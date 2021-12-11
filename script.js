const panels = document.querySelectorAll('.panel');

// Adding active class
panels.forEach((panel) => {
  panel.addEventListener('click', function () {
    removeClassActive();
    panel.classList.add('active');
  });
});

// Removing active class
function removeClassActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
