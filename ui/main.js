console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';

//moving the image
var img=document.getElementById('madi');
var marginleft=0;
function moveRight() {
    
    marginleft=marginleft + 5;
    img.style.marginleft= marginleft + 'px';
}

img.onclick= function(){
     var interval=setInterval(moveRight,50);
};