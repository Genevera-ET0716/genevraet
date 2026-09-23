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

const drawingFields = document.querySelectorAll('.drawing-field');

function layoutDrawingField(field) {
  const styles = getComputedStyle(field);
  const rowHeight = parseFloat(styles.gridAutoRows);

  field.querySelectorAll('.artwork').forEach((item) => {
    item.style.gridRowEnd = 'auto';
  });

  field.querySelectorAll('.artwork').forEach((item) => {
    const height = item.getBoundingClientRect().height;
    const itemGap = parseFloat(getComputedStyle(item).marginBottom);
    item.style.gridRowEnd = `span ${Math.ceil((height + itemGap) / rowHeight)}`;
  });
}

function layoutDrawings() {
  drawingFields.forEach((field) => {
    if (field.getClientRects().length) layoutDrawingField(field);
  });
}

if (drawingFields.length) {
  layoutDrawings();
  window.addEventListener('load', layoutDrawings);
  window.addEventListener('resize', layoutDrawings);

  drawingFields.forEach((field) => {
    field.querySelectorAll('img').forEach((image) => {
      if (!image.complete) image.addEventListener('load', layoutDrawings, { once: true });
    });
  });

  document.querySelectorAll('.more-work').forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) requestAnimationFrame(layoutDrawings);
    });
  });
}

if (dialog) {
  const enlarged = dialog.querySelector('img');
  const close = dialog.querySelector('.lightbox-close');
  const artworks = [...document.querySelectorAll('[data-lightbox]')];
  const previous = document.createElement('button');
  const next = document.createElement('button');
  let currentIndex = 0;

  previous.type = 'button';
  previous.className = 'lightbox-nav lightbox-prev';
  previous.setAttribute('aria-label', 'Previous image');
  previous.textContent = '←';

  next.type = 'button';
  next.className = 'lightbox-nav lightbox-next';
  next.setAttribute('aria-label', 'Next image');
  next.textContent = '→';

  dialog.append(previous, next);

  function showImage(index) {
    currentIndex = (index + artworks.length) % artworks.length;
    const image = artworks[currentIndex].querySelector('img');
    enlarged.src = image.currentSrc || image.src;
    enlarged.alt = image.alt;
  }

  artworks.forEach((button, index) => {
    button.addEventListener('click', () => {
      showImage(index);
      dialog.showModal();
    });
  });

  previous.addEventListener('click', () => showImage(currentIndex - 1));
  next.addEventListener('click', () => showImage(currentIndex + 1));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    enlarged.removeAttribute('src');
    enlarged.alt = '';
  });
}
