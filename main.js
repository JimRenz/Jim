const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnApologyAccepted = document.querySelector(".btn-yes");
const btnApologynotAccepted = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
    // Calculate the random number beetween min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;
}

btnApologynotAccepted.addEventListener("mouseover", (event) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeigth = btnApologynotAccepted.getBoundingClientRect().height;
    const bntWidth = btnApologynotAccepted.getBoundingClientRect().width;
    const btnTop = btnApologynotAccepted.getBoundingClientRect().top;
    const btnLeft = btnApologynotAccepted.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;
    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeigth);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) { 
        newLeft = getRandomNumber(0, containerWidth - bntWidth)
    }

    btnApologynotAccepted.style.top = Math.floor(newTop) + "px";
    btnApologynotAccepted.style.left = Math.floor(newLeft) + "px";
});

btnApologyAccepted.addEventListener("click", (event) => {
    btnApologynotAccepted.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
});