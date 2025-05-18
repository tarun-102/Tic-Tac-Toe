let btn = document.querySelectorAll(".btn");
let resat = document.querySelector('#resat');
let newgame = document.querySelector('#new-game');
let msgContainer = document.querySelector('.msg-container p');
let msgBox = document.querySelector('.msg-container');
let turno = false;

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Add click event to each button
btn.forEach(b => {
    b.addEventListener('click', () => {
        if (b.innerText === '') {
            b.innerText = turno ? "X" : "O";
            turno = !turno;
            checkwinner();
        }
    });
});

// Function to check for winner
const checkwinner = () => {
    for (let pattern of winpattern) {
        let posval0 = btn[pattern[0]].innerText;
        let posval1 = btn[pattern[1]].innerText;
        let posval2 = btn[pattern[2]].innerText;

        if (posval0 !== '' && posval0 === posval1 && posval1 === posval2) {
            showWinner(posval0);
            disablebuttons();
            return;
        }
    }

    // Check for draw
    let allFilled = Array.from(btn).every(b => b.innerText !== '');
    if (allFilled) {
        msgContainer.innerText = "It's a Draw!";
        msgBox.classList.remove('hide');
    }
};

// Show winner message
const showWinner = (winner) => {
    msgContainer.innerText = `Winner is ${winner}`;
    msgBox.classList.remove('hide');
};

// Disable all buttons
const disablebuttons = () => {
    btn.forEach(b => b.disabled = true);
};

// Reset buttons and message
const resetGame = () => {
    btn.forEach(b => {
        b.innerText = '';
        b.disabled = false;
    });
    msgBox.classList.add('hide');
    turno = false;
};

newgame.addEventListener('click', resetGame);
resat.addEventListener('click', resetGame);
