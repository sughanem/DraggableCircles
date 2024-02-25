const circles = document.querySelectorAll('.circle');
const squares = document.querySelectorAll('.square');

circles.forEach(circle => {
    circle.addEventListener('dragstart', () => {
        circle.classList.add('dragging')
    });

    circle.addEventListener('dragend', () => {
        circle.classList.remove('dragging');
    });
});

squares.forEach(square => {
    square.addEventListener('dragover', e => {

        var circle = document.querySelector('.dragging');

        if (circle.id == square.id) {
            e.preventDefault();
            square.appendChild(circle);
            circle.style.cursor = "auto";
            circle.draggable = false;
        }
    })
});