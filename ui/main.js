/*console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML='New Value';

//moving the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft + 5;
    img.style.marginLeft= marginLeft + 'px';
}

img.onclick= function(){
     var interval=setInterval(moveRight,50);
};*/


//counter code
var button=document.getElementByID('counter');
var counte=0;
button.onclick= function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
      if(statechange==XMLHttpRequest.DONE)
      {
          if(request.status==200){
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
          }
      }
        
    };
    
    request.open('GET','http://http://mounikanandikonda243.imad.hasura-app.io/counter',true)
    request.send(null);
};