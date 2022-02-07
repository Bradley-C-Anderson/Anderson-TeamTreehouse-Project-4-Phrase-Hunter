/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /*
    * Adds the active phrase to the display.
    * Creates list objects to add to the DOM
    */
    addPhraseToDisplay(){
        const displayPhrase = document.getElementById('phrase').firstChild.nextSibling;

        for(let i = 0; i < this.phrase.length; i++){
            const letter = this.phrase.charAt(i);
            const li = document.createElement('li');
            if(letter !== ' '){
                li.classList.add('hide');
                li.classList.add('letter');
                li.classList.add(letter);
            } else {
                li.classList.add('space');
            }
            li.textContent = letter;
            displayPhrase.appendChild(li);
        }
    }

    /*
    * Will check the guessed letter and show it in the phrase if it is in it.
    * Changes keyboard to make letters unable to be guess and changing the color to show letter has been played.
    * @param {String} takes in the letter that is guessed.
    */
    checkLetter(letterGuess){
        const phraseLetters = document.getElementsByClassName('letter');
        let numLetters = 0;
        for(let letter of phraseLetters){
            if(letterGuess == letter.innerHTML){
                // letter.classList.remove('hide');
                // letter.classList.add('show');
                this.showMatchedLetter(letter);
                numLetters++;
            } 
        }
        const qwerty = document.getElementsByClassName('key');
        
             for(let letter of qwerty){

                 if(numLetters > 0  && letterGuess === letter.innerHTML){
                    letter.className = 'chosen';
                 } else if (numLetters === 0 && letterGuess === letter.innerHTML){
                    letter.className = 'wrong';
                 }
             }
    }

    /*
    * Shows the letter in the phrase.
    * @param {DOM Letter elements}
    */

    showMatchedLetter(letter){
        letter.classList.remove('hide');
        letter.classList.add('show');
    }

}//end of Phrase class