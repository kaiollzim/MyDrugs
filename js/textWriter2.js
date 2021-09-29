

function typeText2(elemento) {

    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";

    setTimeout(function(){
        textArray.forEach((letra, i) => {
            setTimeout(() => (elemento.innerHTML += letra), 35 * i);
        });
    }, 3000); 
    


}


typeText2(document.querySelector('.popup-write'))

