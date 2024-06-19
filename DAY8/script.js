console.log("Welcome to TICTACTOE");

let isgameover = false;
let turn = "X";

const changeturn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(Element => {
        if ((boxtext[Element[0]].innerText === boxtext[Element[1]].innerText) &&
            (boxtext[Element[2]].innerText === boxtext[Element[1]].innerText) &&
            (boxtext[Element[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[Element[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    });
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


//add listner

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    boxtexts.forEach(element => {
        element.innerText = ""
    });
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
});
