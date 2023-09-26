let arrayimages = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

let firstImage = document.getElementById("firstImg");
let secondImage = document.getElementById("secondImg");
let title = document.getElementById("title");

function getRandomImage() {
  let randomImage = arrayimages[Math.floor(Math.random() * arrayimages.length)];
  return randomImage;
}

function updateImage() {
  let img1 = getRandomImage();
  let img2 = getRandomImage();
  firstImage.src = img1;
  secondImage.src = img2;

  title.innerHTML = getWinner(img1, img2);
}

function getWinner(img1, img2) {
  if (arrayimages.indexOf(img1) > arrayimages.indexOf(img2)) {
    return "Player 1 winner";
  } else if (arrayimages.indexOf(img1) < arrayimages.indexOf(img2)) {
    return "Player 2 winner";
  } else {
    return "Draw";
  }
}
