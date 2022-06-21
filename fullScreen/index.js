var img = document.getElementById('photo');
function getFullScreen(){
    if(img.webkitRequestFullscreen){
        img.webkitRequestFullscreen();
    }
}