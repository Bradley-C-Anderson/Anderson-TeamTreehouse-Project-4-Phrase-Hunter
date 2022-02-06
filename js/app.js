/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();
 const startButton = document.getElementById('btn__reset');
 const qwerty = document.getElementById('qwerty');

 startButton.addEventListener('click', (e) => {
    game.startGame();
 });

 qwerty.addEventListener('click', (e) => {
     const letter = e.target.innerHTML;
     game.activePhrase.checkLetter(letter);
     if(e.target.className === 'key'){
         e.target.className = 'chosen';
     }
     if(!game.checkForWin()){
         console.log('No win yet');
     } else {
         console.log('You win!');
     }
    
 });

