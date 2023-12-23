let monthDayLabel = document.getElementById("monthDay");
let year = document.getElementById("year");

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthDayLabel.innerHTML = months[date.getMonth()] + ", " + date.getDate();
year.innerHTML = date.getFullYear();

let links = [
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/1.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/2.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/3.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/4.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/5.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/6.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/7.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/8.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/9.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/10.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/11.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/12.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/13.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/14.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/15.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/16.JPG",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/17.jpeg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/18.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/rfj.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/20.jpg",
    "https://raw.githubusercontent.com/wcouture2/wcouture2.github.io/main/pictures/22.jpeg"
]

let image = document.getElementById("image");
imageIndex = ((date.getFullYear() * date.getDate() + (date.getMonth())) % links.length) + 1;
randomIndex = Math.floor(Math.random() * links.length);
imagePath = links[randomIndex];

image.src=imagePath;
