const arrowRight = document.querySelector('.right');
const arrowLeft = document.querySelector('.left');
const imagen = document.querySelector('.catalogo');
const pagActual = document.querySelector('.pag-actual');
var posActual = 1;
arrowRight.addEventListener('click',function(){
    if(posActual === 3){
        posActual= 1;
    }else{
        posActual++;
    }

    arrowRight.style.background = 'rgb(50,50,50,.5)';
    setTimeout(function(){
        arrowRight.style.background = 'rgb(155,155,155,.3)';
    },500,"JavaScript");
    
    imagen.style.background = `url(img/pag${posActual}.jpg)`;
    imagen.style.backgroundSize = 'contain';
    imagen.style.backgroundRepeat = 'no-repeat';
    imagen.style.backgroundPosition = 'center';
    pagActual.innerHTML = `Pag. ${posActual}/3`;
    console.log(posActual);
    

})

arrowLeft.addEventListener('click',function(){
    
    if(posActual === 1){
        posActual = 3;
    }else{
        posActual--;
    }
    arrowLeft.style.background = 'rgb(50,50,50,.5)';
    setTimeout(function(){
        arrowLeft.style.background = 'rgb(155,155,155,.3)';
    },500,"JavaScript");
    
    imagen.style.background = `url(img/pag${posActual}.jpg)`;
    imagen.style.backgroundSize = 'contain';
    imagen.style.backgroundRepeat = 'no-repeat';
    imagen.style.backgroundPosition = 'center';
    

    pagActual.innerHTML = `Pag. ${posActual}/3`;
    console.log(posActual);
})
