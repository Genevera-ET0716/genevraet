const dialog = document.querySelector('.lightbox');

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
