function changeText(){
    let text1 = document.getElementById('text1');
    if(text1.innerHTML === "This is text one - before the toggle !"){
        text1.innerHTML = "Hi, this is text after toggle !";
    }
    else{
        text1.innerHTML = "This is text one - before the toggle !";
    }
}