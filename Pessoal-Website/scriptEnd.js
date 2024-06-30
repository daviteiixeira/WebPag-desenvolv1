/*Cursor*/
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let isMouseClicked = false;

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    if (isMouseClicked) {
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.669)'; // Mudar a cor do cursor quando o mouse for clicado
    } else {
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.669)'; // Cor padrão do cursor
    }
});

document.addEventListener('mousedown', () => {
    isMouseClicked = true;
});

document.addEventListener('mouseup', () => {
    isMouseClicked = false;
});
