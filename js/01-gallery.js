import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const items = [];
galleryItems.forEach(element => {
    const galleryItem = document.createElement('li');
    galleryItem.className = 'gallery__item';

    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery__link';
    galleryLink.href = element.original;

    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.alt = element.description;
    galleryImage.setAttribute('data-source', element.original);

    galleryItem.append(galleryLink);

    galleryLink.append(galleryImage);

    items.push(galleryItem);
});

gallery.append(...items);

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
    `);

gallery.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImage = event.target.getAttribute('data-source');

    instance.element().querySelector('img').src = selectedImage;
    instance.show();

    gallery.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close();
        }
    });
});
