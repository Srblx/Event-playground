//& Réagir au "click"
const btn = document.querySelector("#click-btn");

btn.addEventListener("click", () => {
  console.log("%cTu as cliqué sur le bouton", "color:red;");
  const counter = document.querySelector("#click-counter");
  //* Faire augmenter le compteur dans la div
  counter.textContent = parseInt(counter.textContent) + 1;
});



//& Réagir au changement de valeur
const input = document.querySelector("#text-input");
const counter = document.querySelector("#char-count");

input.addEventListener("input", (event) => {
  const valueLength = event.target.value.length;
  counter.innerText = valueLength;
});

//& Envoyez les couleurs !
//* Référence aux éléments HTML que je contrôle
const hueInput = document.querySelector("#hue");
const saturationInput = document.querySelector("#saturation");
const lightnessInput = document.querySelector("#lightness");
const hueValue = document.querySelector("#hue-value");
const saturationValue = document.querySelector("#saturation-value");
const lightnessValue = document.querySelector("#lightness-value");
const colorDisplay = document.querySelector(".color-display");

//* Fonction pour mettre à jour l'affichage de la couleur
function updateColorDisplay() {
  // Récupération des valeurs actuelles des entrées
  const hue = hueInput.value;
  const saturation = saturationInput.value;
  const lightness = lightnessInput.value;

  //* Mise à jour des éléments "span" pour afficher les valeurs actuelles
  hueValue.textContent = hue;
  saturationValue.textContent = saturation;
  lightnessValue.textContent = lightness;

  //* Mise à jour de la couleur d'arrière-plan du bloc d'affichage de la couleur
  colorDisplay.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

//* Ajout d'écouteurs d'événement pour mettre à jour l'affichage de la couleur lorsque les entrées sont modifiées
hueInput.addEventListener("input", updateColorDisplay);
saturationInput.addEventListener("input", updateColorDisplay);
lightnessInput.addEventListener("input", updateColorDisplay);

//* Initialisation de l'affichage de la couleur lorsque la page est chargée
updateColorDisplay();


//& Réagir au changement de taille de la fenêtre du navigateur
let heightScreen = window.innerHeight
let widthScreen = window.innerWidth


 //* Récupérer les références aux éléments "span" pour afficher la largeur et la hauteur
 let screenWidth = document.querySelector("#window-width");
 let screenHeight = document.querySelector("#window-height");

 //* Afficher la largeur et la hauteur du viewport au chargement de la page
 screenWidth.innerHTML = window.innerWidth;
 screenHeight.innerHTML = window.innerHeight;

 //* Ajouter un écouteur d'événement pour redimensionner la fenêtre du navigateur
 window.addEventListener("resize", function() {
   screenWidth.innerHTML = window.innerWidth;
   screenHeight.innerHTML = window.innerHeight;
 });


 //& Réagir à la soumission d'un formulaire 
let form = document.querySelector("#Form");

form.addEventListener("submit", function(event) {
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;

  if (name.length < 2) {
    alert("Le nom est requis et doit être d'une longueur supérieure à 2 caractères");
    event.preventDefault();
  }

  if (age === "" || age < 18) {
    alert("L'âge est requis et doit être supérieur à 18 ans");
    event.preventDefault();
  }
});


//& Réagir au drag
const dragElement = document.querySelector('.drag-element');
const dropZone = document.querySelector('.drop-zone');


dragElement.draggable = true;

dragElement.addEventListener('dragstart', function(event) {
  event.dataTransfer.setData('text/html', this.outerHTML);
    // console.log(this.outerHTML)
});

dropZone.addEventListener('dragover', function(event) {
  event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
  event.preventDefault();
  this.innerHTML = event.dataTransfer.getData('text/html');

});

//* POur faire disparait l'ancien 
dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    this.innerHTML = event.dataTransfer.getData('text/html');
    dragElement.classList.add('hidden');
  });



//& Réagir à l'appui sur une touche
//* Récupère l'élément HTML avec l'identifiant "square"
const square = document.getElementById("square");

//* Initialise les variables pour la position de gauche et de haut
let left = 0;
let haut = 0;

//* Écouter l'événement "keydown" sur le document
document.addEventListener("keydown", function(event) { event.preventDefault();
  //* Vérifie la valeur de "keyCode" pour déterminer quelle touche a été appuyée
  console.log(event.key)
  switch (event.key) {
    case 37: //? flèche gauche
      //* Vérifie si le point n'est pas déjà à la limite gauche
      if (left > 0) {
        //* Décrémente la position
        left -= 5;
        //* Définit la nouvelle position de gauche sur l'élément HTML
        square.style.left = left + "px";
      }
      break;
    case 38: //? flèche haut
      //* Vérifie si le point n'est pas déjà à la limite haute
      if (haut > 0) {
        //* Décrémente la position 
        haut -= 5;
        square.style.top = haut + "px";
      }
      break;
    case 39: //? flèche droite
      //* Vérifie si le point n'est pas déjà à la limite droite
      if (left < 390) {
        //* Incrémente la position
        left += 5;
        square.style.left = left + "px";
      }
      break;
    case 40: //? flèche bas
      //* Vérifie si le point n'est pas déjà à la limite basse
      if (haut < 390) {
        //* Incrémente la position 
        haut += 5;
        square.style.top = haut + "px";
      }
      break;
  }
});

// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
