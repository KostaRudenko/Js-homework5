let game = document.getElementById('game');
let cell = document.querySelectorAll('.cell');
let result = document.getElementById('result');
let newGame = document.getElementById('newGame');

let step = 0;

game.addEventListener('click', (e) => {
    if (e.target.className === 'cell') {
        if (step % 2 === 0) {
            e.target.innerHTML = 'x';
            result.innerHTML = 'Ходят Нолики';
        } else {
            e.target.innerHTML = 'o';
            result.innerHTML = 'Ходят Крестики';
        }
        (e.target.textContent === 'x') ? e.target.classList.add('x') : e.target.classList.add('o');
        step++;
        checkWinner();

        if (result.innerHTML === 'Крестики Выиграли!' || result.innerHTML === 'Ходят Крестики') result.style.color = '#ff605b';
        if (result.innerHTML === 'Нолики Выиграли!' || result.innerHTML === 'Ходят Нолики') result.style.color = '#abfdab';
    }
    checkDraw();
    endGame();

});
let checkWinner = () => {
    // Крестики
    if (cell[0].innerHTML === 'x' && cell[1].innerHTML === 'x' && cell[2].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[3].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[5].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[6].innerHTML === 'x' && cell[7].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[0].innerHTML === 'x' && cell[3].innerHTML === 'x' && cell[6].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[1].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[7].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[2].innerHTML === 'x' && cell[5].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[0].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    if (cell[2].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[6].innerHTML === 'x') result.innerHTML = 'Крестики Выиграли!';
    // Нолики
    if (cell[0].innerHTML === 'o' && cell[1].innerHTML === 'o' && cell[2].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[3].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[5].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[6].innerHTML === 'o' && cell[7].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[0].innerHTML === 'o' && cell[3].innerHTML === 'o' && cell[6].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[1].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[7].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[2].innerHTML === 'o' && cell[5].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[0].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
    if (cell[2].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[6].innerHTML === 'o') result.innerHTML = 'Нолики Выиграли!';
};

let checkDraw = () => {
    if (cell[0].firstChild !== null && cell[1].firstChild !== null && cell[2].firstChild !== null &&
        cell[3].firstChild !== null && cell[4].firstChild !== null && cell[5].firstChild !== null &&
        cell[6].firstChild !== null && cell[7].firstChild !== null && cell[8].firstChild !== null) {
        if (result.innerHTML !== 'Нолики Выиграли!' && result.innerHTML !== 'Крестики Выиграли!') {
            result.classList.add('draw');
            result.innerHTML = 'Ничья';
        }
    }
};

let endGame = () => {
    if (result.innerHTML === 'Крестики Выиграли!' || result.innerHTML === 'Нолики Выиграли!') {
        for (let i = 0; i < cell.length; i++) {
            if (cell[i].classList.length === 1) cell[i].classList.add('blank');
        }
    }
};

newGame.addEventListener('click', () => {
    location.reload();
});


