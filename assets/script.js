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
];

function getSlideNumber() {
  const imgSrc = document.querySelector(".banner-img").getAttribute("src");
  return Number(imgSrc.match(/\d+/g));
}

function getPreviousNumber() {
  if (currentIndex == 1) {
    return 4;
  } else {
    return currentIndex - 1;
  }
}

function getNextNumber() {
  if (currentIndex == 4) {
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

function updateCaroussel(newIndex) {
  const imgDiv = document.querySelector(".banner-img");

  if (newIndex == 4) {
    imgDiv.src = "./assets/images/slideshow/slide" + newIndex + ".png";
  } else {
    imgDiv.src = "./assets/images/slideshow/slide" + newIndex + ".jpg";
  }
}

/// Nombre de points selon le nombre d'images dans le slider
const dotsDiv = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";
  dotsDiv.appendChild(dot);
}

/// Affichage point rempli selon l'image en HTML

let currentIndex = getSlideNumber();

let dotSelected = document.getElementsByClassName("dot")[currentIndex - 1];
dotSelected.className = "dot dot_selected";

// Clics gauches et droits 

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", (event) => {
  let newIndex = getPreviousNumber();
  removeDotSelection();
  currentIndex = newIndex;
  updateDotSelection();
  updateCaroussel(newIndex);

});

arrowRight.addEventListener("click", (event) => {
  let newIndex = getNextNumber();
  removeDotSelection();
  currentIndex = newIndex;
  updateDotSelection();
  updateCaroussel(newIndex);
});
