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
