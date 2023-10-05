import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const list = document.querySelector('.gallery');
const item = markup(galleryItems);

function markup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallary__item"><a href="${original}" class="gallery__link">
    <img src="${preview}" 
        alt="${description}" 
        class="gallery__image"></a></li>`,
    )
    .join('');
}

list.insertAdjacentHTML('afterbegin', item);

const newGallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
