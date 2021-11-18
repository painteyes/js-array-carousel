const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// add new elements to HTML DOM 
const imagesContainer = document.querySelector('.images-container');
const thumbnails = document.querySelector('.thumbnails');

for (let i = 0; i < items.length; i++){
    
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // new image template
    const singleImageDiv = `
    <div class="single-image">

        <img src="${thisPath}" alt=""> 

        <div class="single-image-text">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>
    </div>
    `;

    // new thumb template
    const singleThumbDiv = `
    <div class="single-thumb">
        <img src="${thisPath}" alt="">
    </div>  
    `;

    // append new image and new thumb
    imagesContainer.innerHTML += singleImageDiv;
    thumbnails.innerHTML += singleThumbDiv;
}

// get .active class by default
let defaultActive = 0;

const allImages = document.getElementsByClassName('single-image');
const allThumbs = document.getElementsByClassName('single-thumb');

allImages [defaultActive].classList.add('active');
allThumbs [defaultActive].classList.add('active');




