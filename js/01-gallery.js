import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');
const item = markup(galleryItems);

list.insertAdjacentHTML('afterbegin', item);

function markup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"

/>
</a>
</li>`,
    )
    .join('');
}
list.addEventListener('click', handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const img = evt.target.closest('.gallery__image');

  const makeGallery = basicLightbox.create(`
<div class="modal">
<img src="${img.dataset.source}" width="800" height="600">
</div>
`);

  makeGallery.show();
  const card = document.querySelector('.basicLightbox');
  card.addEventListener('click', close);
  function close(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    makeGallery.close();
  }
}
