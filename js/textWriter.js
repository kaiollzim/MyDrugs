function typeText(elemento) {

    const textArray = elemento.innerText.split("");
    elemento.innerText = "";


    textArray.forEach((letra, i) => {
        setTimeout(() => (elemento.innerText += letra), 230 * i);
    });

    setTimeout(() => {
        $('.title').append(` <i class="fas fa-tablets fa-xs"></i>`)
    }, textArray.length * 230);

}

typeText(document.querySelector('.title'))
