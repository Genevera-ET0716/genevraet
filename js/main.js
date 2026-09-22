const dialog = document.querySelector('.lightbox');

document.querySelectorAll('.more-work').forEach((details) => {
  const summary = details.querySelector('summary');
  const showLess = document.createElement('button');
  showLess.type = 'button';
  showLess.className = 'show-less';
  showLess.textContent = 'show less';
  showLess.addEventListener('click', () => {
    details.open = false;
    summary.focus();
  });
  details.append(showLess);
  details.classList.add('has-show-less');
});

if (dialog) {
  const enlarged = dialog.querySelector('img');
  const close = dialog.querySelector('.lightbox-close');

  document.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      enlarged.src = image.src;
      enlarged.alt = image.alt;
      dialog.showModal();
    });
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    enlarged.removeAttribute('src');
    enlarged.alt = '';
  });
}
