
 const images = []

function initScreen() {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button onclick="showImage(event)" class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
    document.querySelector('.next').onclick = showNext;
    document.querySelector('.prev').onclick = showPrev;
    document.querySelector('.featured_image').onclick = showNext;
}

let currentIndex = 0;

const showImage = (ev) => {
   const elem = ev.currentTarget;
   currentIndex = parseInt(elem.dataset.index);
   console.log("currentIndex:", currentIndex);
   document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage
};

const showNext = (ev) => {
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex])
    let image = "url('" + images[currentIndex %8] +"')"
    console.log(image)
    document.querySelector('.featured_image').style.backgroundImage = image
};

const showPrev = (ev) => {
    currentIndex -= 1;
    if (currentIndex < 0) currentIndex += 8
    console.log("currentIndex:", currentIndex);
    console.log(images[currentIndex])
    let image = "url('" + images[currentIndex %8] +"')"
    console.log(image)
    document.querySelector('.featured_image').style.backgroundImage = image
};

initScreen();