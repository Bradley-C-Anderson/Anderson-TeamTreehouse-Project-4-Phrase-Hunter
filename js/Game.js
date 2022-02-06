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

    startGame(){
        document.getElementById('overlay').style.display = 'none';
        //document.getElementById('').style.display = 'block';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    checkForWin(){
        let matchedCount = 0;
        const phraseLetters = document.getElementsByClassName('show');
        //console.log(this.activePhrase);
        //console.log(this.activePhrase.phrase.split(" ").join(""));
        let noSpaces = this.activePhrase.phrase.split(" ").join("");
        console.log(phraseLetters.length);
        console.log(noSpaces.length);
        if(phraseLetters.length === noSpaces.length){ 
            return true;
        } else {
            return false;
        }
    }

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

    handleInteraction(button){
        console.log(button);
        if(button.className === 'key'){
            
            const letter = button.innerHTML;
            game.activePhrase.checkLetter(letter);
            
            console.log(button.className);
            if(button.className === 'wrong'){
                this.removeLife();
            }
            if(game.checkForWin()){
                this.gameOver(game.checkForWin)
            } else {
                console.log('No win yet');
            }
        }
        
        
    }

}//end of Game class