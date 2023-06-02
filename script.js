let monthDayLabel = document.getElementById("monthDay");
let year = document.getElementById("year");

const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthDayLabel.innerHTML = months[date.getMonth()] + ", " + date.getDate();
year.innerHTML = date.getFullYear();

/*
let image = document.getElementById("image");
imageIndex = (date.getFullYear() * (date.getDate() + date.getMonth()) % 22) + 1;
//randomIndex = Math.floor(Math.random() * 20);
imagePath = "./pictures/" + imageIndex + ".jpg";

image.src=imagePath;
*/