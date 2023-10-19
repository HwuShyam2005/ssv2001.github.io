let initial = 0;

let pictures = [];

let timetaken = 5000; // 5 seconds

pictures[0] = "images/travel banner.svg";
pictures[1] = "images/banner.svg";
pictures[2] = "images/7.jpeg";
pictures[3] = "images/2.jpeg";
pictures[4] = "images/3.jpeg";
pictures[5] = "images/4.jpeg";
pictures[6] = "images/5.jpeg";
pictures[7] = "images/6.jpeg";

function imgchange() {
  let slide = document.getElementsByName("slide")[0];

  slide.src = pictures[initial];

  initial++;

  if (initial == pictures.length) {
    initial = 0;
  }
}

setInterval(imgchange, timetaken);

window.onload = imgchange;