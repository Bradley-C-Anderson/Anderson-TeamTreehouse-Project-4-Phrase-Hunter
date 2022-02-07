/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{

    constructor(){
        this.misses = 0;
        this.phrases = [new Phrase("Back to the Future"),
                        new Phrase("Harry Potter and the Sorcerers Stone"),
                        new Phrase("Flash Gordon"),
                        new Phrase("Encanto"),
                        new Phrase("May the Force be with you")];
        this.activePhrase = null;
    }
    /*
    *Returns a random phrase from the phrases property
    * @return {Object} Phrase Object
    */
    getRandomPhrase(){
        const random = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[random];
    }
    /*
    * Starts the game by getting a random phrase and adding it to the display
    */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /*
    * Determines if the player wins.
    * @return true if player wins, false if they haven't won yet.
    */
    checkForWin(){
        let matchedCount = 0;
        const phraseLetters = document.getElementsByClassName('show');
        let noSpaces = this.activePhrase.phrase.split(" ").join("");
        if(phraseLetters.length === noSpaces.length){ 
            return true;
        } else {
            return false;
        }
    }
    /*
    * Removes a life if the letter guess is incorrect.
    * When there are 5 incorrect guesses calls gameOver method.
    */
    removeLife(){
        let wonGame = false;
        let heartList = document.getElementsByClassName('tries');
        const heart = heartList[heartList.length - this.misses - 1].firstElementChild;
        heart.src = 'images/lostHeart.png';
        heart.alt = 'Empty Heart Icon';
        this.misses++;
        if(this.misses === 5){
            this.gameOver(wonGame);
        }
    }

    /*
    * Shows win message when game is won, lost message when game is lost.
    * @param {boolean} True if game is won, false if game is lost
    */
    gameOver(gameWon){
        const gameOverMessage = document.getElementById('game-over-message');
        if(gameWon){
            gameOverMessage.innerHTML = 'You Win!';
            gameOverMessage.parentElement.className = 'win';
        } else {
            gameOverMessage.innerHTML = 'You Lose.';
            gameOverMessage.parentElement.className = 'lose';
        }
        document.getElementById('overlay').style.display = 'block';
    }

    /*
    * Handles interaction with the visual keyboard clicks. If the letter is wrong, removes life
    * If player wins, calls the game over.
    * @param {Object} Button object from the input keys
    */
    handleInteraction(button){
        if(button.className === 'key'){
            
            const letter = button.innerHTML;
            game.activePhrase.checkLetter(letter);
            
            if(button.className === 'wrong'){
                this.removeLife();
            }
            if(game.checkForWin()){
                this.gameOver(game.checkForWin);
            } 
        }
    }

    /*
    * Removes letters from previous active phrase in the DOM.
    * Reset keyboard classes to 'key'
    * Reset heart images
    * Reset the misses counter.
    */
    resetGame(){
        //remove previous phrase
        const phraseLettersUL = document.getElementById('phrase').firstElementChild;
        while(phraseLettersUL.hasChildNodes()){
            phraseLettersUL.removeChild(phraseLettersUL.firstChild);
        }

        //reset keyboard
        const keyButtons = qwerty.getElementsByTagName('button');
        for(let key of keyButtons){
            key.className = 'key';
        }
        //reset hearts
        const heartList = document.getElementsByClassName('tries');
        //console.log(heartList);
        for(let i = 0; i < heartList.length; i++){
            let heart = heartList[i].firstElementChild;
            heart.src = 'images/liveHeart.png';
            heart.alt = 'Heart Icon';
        }
        //reset misses count
        this.misses = 0;
    }

}//end of Game class