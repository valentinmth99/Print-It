const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
  {
    image: "slide5.jpg",
    tagLine: "Test",
  },
];

let slidesNumber = slides.length;

/// Nombre de points selon le nombre d'images dans le slider
const dotsDiv = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";
  dotsDiv.appendChild(dot);
}

function getSlideNumber() {
  const imgSrc = document.querySelector(".banner-img").getAttribute("src");
  return Number(imgSrc.match(/\d+/g));
}

/// Affichage point rempli selon l'image en HTML

let currentIndex = getSlideNumber();

let dotSelected = document.getElementsByClassName("dot")[currentIndex - 1];
dotSelected.className = "dot dot_selected";

function getPreviousNumber() {
  if (currentIndex == 1) {
    return slidesNumber;
  } else {
    return currentIndex - 1;
  }
}

function getNextNumber() {
  if (currentIndex == slidesNumber) {
    return 1;
  } else {
    return currentIndex + 1;
  }
}

function removeDotSelection() {
  dotSelected = document.getElementsByClassName("dot")[currentIndex - 1];
  dotSelected.className = "dot";
}

function updateDotSelection() {
  dotSelected = document.getElementsByClassName("dot")[currentIndex - 1];
  dotSelected.className = "dot dot_selected";
}

function updateCarroussel(newIndex) {
  let textBanner = document.querySelector("#banner p");
  let imgBanner = document.querySelector(".banner-img");
  let newIgmSrc = document
    .querySelector(".banner-img")
    .getAttribute("src")
    .replace(slides[currentIndex - 1]["image"], slides[newIndex - 1]["image"]);
  imgBanner.src = newIgmSrc;
  textBanner.innerHTML = slides[newIndex - 1]["tagLine"];
}

// Clics gauches et droits

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", (event) => {
  let newIndex = getPreviousNumber();
  removeDotSelection();
  updateCarroussel(newIndex);
  currentIndex = newIndex;
  updateDotSelection();
});

arrowRight.addEventListener("click", (event) => {
  let newIndex = getNextNumber();
  removeDotSelection();
  updateCarroussel(newIndex);
  currentIndex = newIndex;
  updateDotSelection();
});
