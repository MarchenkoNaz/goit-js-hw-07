import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line
const galleryList = document.querySelector(".gallery")
const markupGallery = createMarkup(galleryItems)
galleryList.insertAdjacentHTML('beforeend', markupGallery)


function createMarkup(arr) {
	return arr.map(el => {
		return `<li class="gallery__item">
	<a class="gallery__link" href="${el.original}">
	   <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
	</a>
 </li>`}).join('')
}

var lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});