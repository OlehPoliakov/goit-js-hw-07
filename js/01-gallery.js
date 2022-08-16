import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Создадим переменную. Найдем <div class="gallery"></div>
const gallery = document.querySelector('.gallery');
const items = [];
// Переберем масив galleryItems Методом forEach
galleryItems.forEach(element => {
    // Создадим тег <div> и добавим атрибут className
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery__item';
    // Создадим тег <а> добавим атрибут className и href
    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery__link';
    galleryLink.href = element.original;
    // Создадим тег <img> добавим атрибут className, src, alt и data-source
    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = element.preview;
    galleryImage.alt = element.description;
    galleryImage.setAttribute('data-source', element.original);
    // Добавим в <div> --> <а>
    galleryItem.append(galleryLink);
    // Добавим в <а> --> <img>
    galleryLink.append(galleryImage);
    // Пушим всё в пустой массив переменной `items`
    items.push(galleryItem);
});
// Добавим в переменную `gallery` --> собранную переменную `items`
gallery.append(...items);

gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const selectedImage = event.target.getAttribute('data-source');
    console.log(selectedImage);

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
    console.log(instance)
        // instance.show()

    //     gallery.addEventListener('keydown', e => {
    // 		if (e.key === 'Escape') {
    // 			instance.close()
    // 		}
    // 	})
});
