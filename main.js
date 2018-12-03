let game = document.getElementById('game');
let cell = document.querySelectorAll('.cell');
let result = document.getElementById('result');
let newGame = document.getElementById('newGame');

let step = 0;

game.addEventListener('click', (e)=> {
    if (e.target.className === 'cell') {
        if(step % 2 === 0) e.target.innerHTML = 'x';
         else e.target.innerHTML = 'o';

        step++;
        checkWinner();

        if (step === 9) result.innerHTML = 'Its a Draw';

        if (e.target.textContent === 'x') e.target.classList.add('x');
         else if (e.target.textContent === 'o') e.target.classList.add('o');
    }
});

let checkWinner =()=> {
    // X
    if (cell[0].innerHTML === 'x' && cell[1].innerHTML === 'x' && cell[2].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[3].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[5].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[6].innerHTML === 'x' && cell[7].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[0].innerHTML === 'x' && cell[3].innerHTML === 'x' && cell[6].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[1].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[7].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[2].innerHTML === 'x' && cell[5].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[0].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[8].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    if (cell[2].innerHTML === 'x' && cell[4].innerHTML === 'x' && cell[6].innerHTML === 'x') result.innerHTML = `Player 'X' win!`;
    // O
    if (cell[0].innerHTML === 'o' && cell[1].innerHTML === 'o' && cell[2].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[3].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[5].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[6].innerHTML === 'o' && cell[7].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[0].innerHTML === 'o' && cell[3].innerHTML === 'o' && cell[6].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[1].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[7].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[2].innerHTML === 'o' && cell[5].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[0].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[8].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
    if (cell[2].innerHTML === 'o' && cell[4].innerHTML === 'o' && cell[6].innerHTML === 'o') result.innerHTML = `Player 'O' win!`;
};

newGame.addEventListener('click', ()=> {
    location.reload();
});


