var gameOver = new Audio("gameover.mp3");
var playerTurn = new Audio("ting.mp3");
var turn = "X";
var isGameOver = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {

    //need to the all boxTexts
    var boxTexts = document.getElementsByClassName('boxtext');
    console.log(boxTexts);
    var wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],



    ];
    wins.forEach(singleArr => {

        if ((boxTexts[singleArr[0]].innerText === boxTexts[singleArr[1]].innerText) && (boxTexts[singleArr[2]].innerText === boxTexts[singleArr[1]].innerText) && (boxTexts[singleArr[0]].innerText !== "")) {
            isGameOver = true
            document.getElementsByClassName("info")[0].innerText = boxTexts[singleArr[0]].innerText + " " + "Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";

        }
    })

}




//Game Logic here
var boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) => {

    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            playerTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }


        }
    })
})


//reset functionalty here
var reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    var boxTexts = document.getElementsByClassName('boxtext');
    Array.from(boxTexts).forEach((e) => {
        e.innerText = "";
    })
    turn = "X";
    isGameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})