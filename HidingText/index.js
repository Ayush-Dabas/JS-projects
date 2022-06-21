function hideText(){
    var textH = document.getElementById('text');
    if(textH.innerHTML === "This is the text to be hidden"){
        textH.innerHTML = "";
        // textH.style.border = "none";
        textH.style.visibility = "hidden";
    }else{
        textH.innerHTML = "This is the text to be hidden";
        // textH.style.border = "border: 3px solid rebeccapurple;";
        // textH.style.borderRadius = "border-radius: 8px";
        textH.style.visibility = "visible";
    }
}