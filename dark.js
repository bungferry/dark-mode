const checkbox = document.querySelector('input[name=theme]');
setThemeOnLoad();

checkbox.addEventListener('change', function() {
  let value;

  if (this.checked) {
      transition();
      document.documentElement.setAttribute('data-theme', 'dark');
      value = 'dark';
  } else {
      transition();
      document.documentElement.setAttribute('data-theme', 'light');
      value = 'light';
  }
  // save theme value
  localStorage.setItem('data-theme', value);
});


// get previously applied theme
function setThemeOnLoad() {
  let theme = localStorage.getItem('data-theme');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    // set toggle state
    checkbox.checked = true;
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
}

let transition = () => {
  document.documentElement.classList.add('transition');
  document.documentElement.addEventListener('animationend', () => {
    this.classList.remove('transition');
  });
}
