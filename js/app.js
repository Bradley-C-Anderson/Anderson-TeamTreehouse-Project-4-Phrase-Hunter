/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const startButton = document.getElementById('btn__reset');
 const qwerty = document.getElementById('qwerty');

 startButton.addEventListener('click', (e) => {
    game.resetGame();
    game.startGame();
    //console.log(phraseLetters);
 });

 const qwertyHandler = e => {
    game.handleInteraction(e.target);
}

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */

qwerty.addEventListener('click', qwertyHandler);



