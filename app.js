const image = document.querySelector('.image-container');
const h1 = document.querySelector('.image-container h1');

var imageList = [{"Chicago": "https://www.w3schools.com/w3images/chicago.jpg"}, 
                {"New York": "https://www.w3schools.com/w3images/ny.jpg"}, 
                {"Los Angeles": "https://www.w3schools.com/w3images/la.jpg"}]

var index = 0;
window.addEventListener('DOMContentLoaded', () => {
    setInterval(function() {
        if (index < imageList.length - 1) {
            index++;
        } else {
            index = 0;
        }
        image.style.backgroundImage = `url(${Object.values(imageList[index])})`;
        h1.innerText = `${Object.keys(imageList[index])}`;
    }, 5000);
})