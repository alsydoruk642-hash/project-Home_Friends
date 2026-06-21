const themeBtn = document.querySelector('.button-theme');
const themeIcon = document.querySelector('.icon-theme use');

// Завантаження збереженої теми
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.dataset.theme = currentTheme;

themeIcon.setAttribute(
  'href',
  currentTheme === 'dark' ? './sprite.svg#icon-dark' : './sprite.svg#icon-light'
);

// Перемикання теми
themeBtn.addEventListener('click', () => {
  const newTheme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;

  localStorage.setItem('theme', newTheme);

  themeIcon.setAttribute(
    'href',
    newTheme === 'dark' ? './sprite.svg#icon-dark' : './sprite.svg#icon-light'
  );
});
