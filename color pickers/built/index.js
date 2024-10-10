"use strict";
/*function pressToChangeColor(){
    let body: HTMLElement = document.getElementById("colorChanging")!;
    
    if (body.style.backgroundColor === 'brown') {
        body.style.backgroundColor = '#0000ff';
    } else {
        body.style.backgroundColor = 'brown';
    }
}*/
function changeColor(color) {
    let body = document.getElementById("colorChanging");
}
let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => changeColor(buttons[i].id));
}
