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

 

//  qwerty.addEventListener('click', (e) => {
//     if(e.target.className === 'button'){
//         handleInteraction(e.target);
//     }
// });

    //  const letter = e.target.innerHTML;
    //  game.activePhrase.checkLetter(letter);
    //  if(e.target.className === 'key'){
    //      e.target.className = 'chosen';
    //  }
    //  if(!game.checkForWin()){
    //      console.log('No win yet');
    //  } else {
    //      console.log('You win!');
    //  }
    
//Is this the callback that they want???
qwerty.addEventListener('click', (e) => {
    //console.log(e.target);
        game.handleInteraction(e.target);
});

 /**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

