let game = document.getElementById('game');
let cell = document.querySelectorAll('.cell');
let result = document.getElementById('result');
let newGame = document.getElementById('newGame');
let xWins = 'Крестики Выиграли!';
let oWins = 'Нолики Выиграли!';
let xTurn = 'Ходят Крестики';
let oTurn = 'Ходят Нолики';
let x = 'x';
let o = 'o';

let step = 0;

game.onclick = (e) => {
    if (e.target.className === 'cell') {
        if (step % 2 === 0) {
            e.target.innerHTML = x;
            result.innerHTML = oTurn;
        } else {
            e.target.innerHTML = o;
            result.innerHTML = xTurn;
        }
        (e.target.textContent === x) ? e.target.classList.add(x) : e.target.classList.add(o);
        step++;
        checkWinner();

        if (result.innerHTML === xWins || result.innerHTML === xTurn) result.style.color = '#ff605b';
        if (result.innerHTML === oWins || result.innerHTML === oTurn) result.style.color = '#abfdab';
    }
    checkDraw();
    endGame();

};
const checkWinner = () => {
    // Крестики
    if (cell[0].innerHTML === x && cell[1].innerHTML === x && cell[2].innerHTML === x) result.innerHTML = xWins;
    if (cell[3].innerHTML === x && cell[4].innerHTML === x && cell[5].innerHTML === x) result.innerHTML = xWins;
    if (cell[6].innerHTML === x && cell[7].innerHTML === x && cell[8].innerHTML === x) result.innerHTML = xWins;
    if (cell[0].innerHTML === x && cell[3].innerHTML === x && cell[6].innerHTML === x) result.innerHTML = xWins;
    if (cell[1].innerHTML === x && cell[4].innerHTML === x && cell[7].innerHTML === x) result.innerHTML = xWins;
    if (cell[2].innerHTML === x && cell[5].innerHTML === x && cell[8].innerHTML === x) result.innerHTML = xWins;
    if (cell[0].innerHTML === x && cell[4].innerHTML === x && cell[8].innerHTML === x) result.innerHTML = xWins;
    if (cell[2].innerHTML === x && cell[4].innerHTML === x && cell[6].innerHTML === x) result.innerHTML = xWins;
    // Нолики
    if (cell[0].innerHTML === o && cell[1].innerHTML === o && cell[2].innerHTML === o) result.innerHTML = oWins;
    if (cell[3].innerHTML === o && cell[4].innerHTML === o && cell[5].innerHTML === o) result.innerHTML = oWins;
    if (cell[6].innerHTML === o && cell[7].innerHTML === o && cell[8].innerHTML === o) result.innerHTML = oWins;
    if (cell[0].innerHTML === o && cell[3].innerHTML === o && cell[6].innerHTML === o) result.innerHTML = oWins;
    if (cell[1].innerHTML === o && cell[4].innerHTML === o && cell[7].innerHTML === o) result.innerHTML = oWins;
    if (cell[2].innerHTML === o && cell[5].innerHTML === o && cell[8].innerHTML === o) result.innerHTML = oWins;
    if (cell[0].innerHTML === o && cell[4].innerHTML === o && cell[8].innerHTML === o) result.innerHTML = oWins;
    if (cell[2].innerHTML === o && cell[4].innerHTML === o && cell[6].innerHTML === o) result.innerHTML = oWins;
};

const checkDraw = () => {
    if (cell[0].firstChild !== null && cell[1].firstChild !== null && cell[2].firstChild !== null &&
        cell[3].firstChild !== null && cell[4].firstChild !== null && cell[5].firstChild !== null &&
        cell[6].firstChild !== null && cell[7].firstChild !== null && cell[8].firstChild !== null) {
        if (result.innerHTML !== oWins && result.innerHTML !== xWins) {
            result.classList.add('draw');
            result.innerHTML = 'Ничья';
        }
    }
};

const endGame = () => {
    if (result.innerHTML === xWins || result.innerHTML === oWins) {
        for (let i = 0; i < cell.length; i++) {
            if (cell[i].classList.length === 1) cell[i].classList.add('blank');
        }
    }
};

newGame.onclick = () => location.reload();


