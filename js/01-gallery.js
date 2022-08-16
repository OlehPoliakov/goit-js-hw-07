import { galleryItems } from './gallery-items.js';

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
// Добавим событие клика
gallery.addEventListener('click', event => {
// Запрещаем действие по умолчанию Метод preventDefault ()
    event.preventDefault();
// Для проверки типа элемента используем свойство nodeName
// мы не хотим обрабатывать клики кроме IMG
    if (event.target.nodeName !== 'IMG') {
        return;
    }
// Выбираем IMG по Атрибуту 'data-source'
    const selectedImage = event.target.getAttribute('data-source');
// Подключаем скрипт и стили библиотеки модального окна basicLightbox.
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
    `);
    instance.show();
// Добавляем закрытие модального окна по нажатию клавиши Escape.
    gallery.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close();
        }
    });
});
