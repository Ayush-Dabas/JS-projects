const colourBox = document.getElementById("colourBox");
const colourCode = document.getElementById("colourCode");
const generateButton = document.getElementById("generateButton");

function getRandomColour() {
    const letters = "0123456789ABCDEF";
    let colour = "#";
    for(let i=0 ; i<6 ; i++){
        colour += letters[Math.floor(Math.random() * 16)];
    }
    // alert(colour);    
    return colour;
}

generateButton.addEventListener("click", () => {
    const newColour = getRandomColour();
    // alert(newColour);
    
    colourBox.style.background = newColour;
    colourCode.textContent = `HEX: ${newColour}`;
});