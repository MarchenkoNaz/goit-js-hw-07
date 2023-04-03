import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryList = document.querySelector(".gallery")



// !MARKUP of gallery
const markupGalleryImages = createMarkup(galleryItems)
galleryList.insertAdjacentHTML('beforeend', markupGalleryImages)

function createMarkup(arr) {
	return arr.map(element => {
		return `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</li>`
	}).join("")//creating markup of gallery
}

// $Modal window

galleryList.addEventListener('click', onClick)

function onClick(evt) {
	const img = evt.target;
	evt.preventDefault()//remove downloading photos
	if (!img.classList.contains('gallery__image')) {
		return
	}//check if we click on certain photo

	const { source } = img.dataset //link on the large photo
	//#opening
	const instance = basicLightbox.create(`<img
	class="gallery__image"
	src="${source}"
  />`);
	instance.show()// opens modal window with the large photo
	//#closing
	galleryList.addEventListener("keydown", (evt) => {
		if (evt.code === 'Escape') {
			instance.close()
		}
	})//closes modal window using Escape


}





