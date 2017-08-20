let itemsAdded = 0;
let imageIndex = 1;

setTimeout(function () {
	document.body.className = "";
}, 500)

showImage(imageIndex);

function addImageIndex(n) {
	showImage(imageIndex += n);
}

function currentImage(n) {
	showImage(imageIndex = n);
}

function showImage(n) {
	let images = document.getElementsByClassName("item__image__full__main");
	let thumbs = document.getElementsByClassName("item__image__thumb");

	n > images.length ? imageIndex = 1 : imageIndex;
	n < 1 ? imageIndex = images.length : imageIndex;

	for (let i = 0; i < images.length; i++) {
		images[i].className = images[i].className.replace(" item__image__full__main--visible", "");
	}
	for (let i = 0; i < thumbs.length; i++) {
		thumbs[i].className = thumbs[i].className.replace(" item__image__thumb--active", "");
	}

	images[imageIndex - 1].className += " item__image__full__main--visible";
	thumbs[imageIndex - 1].className += " item__image__thumb--active";
}

function addItem() {
	itemsAdded = 1;
	let cartItems = document.getElementById("cart__items");
	cartItems.innerHTML = itemsAdded;

	let noItems = document.getElementById("cart__info__none");
	noItems.className = noItems.className.replace(" cart__info__none--visible", "")

	let cartTable = document.getElementById("cart__table");
	cartTable.className = cartTable.className += " table--visible";
}

function removeItem() {
	itemsAdded = 0;
	let cartItems = document.getElementById("cart__items");
	cartItems.innerHTML = itemsAdded;

	let noItems = document.getElementById("cart__info__none");
	noItems.className = noItems.className += " cart__info__none--visible";

	let cartTable = document.getElementById("cart__table");
	cartTable.className = cartTable.className.replace(" table--visible", "");
}