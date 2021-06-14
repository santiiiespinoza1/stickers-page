const arrowRight = document.querySelector('.right');
const arrowLeft = document.querySelector('.left');
const imagen = document.querySelector('.catalogo')
var posActual = 1;
arrowRight.addEventListener('click',function(){
    posActual++;
    arrowRight.style.background = '#aaa';
    setTimeout(function(){
        arrowRight.style.background = 'rgb(155,155,155,.5)';
    },500,"JavaScript");
    
    imagen.style.background = `url(img/pag${posActual}.jpg)`;
    imagen.style.backgroundSize = 'contain';
    imagen.style.backgroundRepeat = 'no-repeat';
    imagen.style.backgroundPosition = 'center';
    console.log(posActual);
    if(posActual === 3){
        posActual= 0;
    }

})

arrowLeft.addEventListener('click',function(){
   
    arrowLeft.style.background = '#aaa';
    setTimeout(function(){
        arrowLeft.style.background = 'rgb(155,155,155,.5)';
    },500,"JavaScript");
    
    imagen.style.background = `url(img/pag${posActual}.jpg)`;
    imagen.style.backgroundSize = 'contain';
    imagen.style.backgroundRepeat = 'no-repeat';
    imagen.style.backgroundPosition = 'center';
    
    if(posActual === 1){
        posActual = 4;
    }
    posActual--;
    console.log(posActual);

})