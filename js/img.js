const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choenImage = images[Math.floor(Math.random() * images.length)];

const figure = document.querySelector('figure');

const img  = document.createElement("img");
img.src = `./img/${choenImage}`;

figure.appendChild(img);