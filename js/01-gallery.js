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
    galleryLink.href = element.original
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
