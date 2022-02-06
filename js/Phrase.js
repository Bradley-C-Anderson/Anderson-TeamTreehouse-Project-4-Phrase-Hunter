/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const displayPhrase = document.getElementById('phrase').firstChild.nextSibling;
        //console.log(displayPhrase.firstChild.nextSibling);
        //<li class="hide letter h">h</li>

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

    checkLetter(letterGuess){
        const phraseLetters = document.getElementsByClassName('letter');
        //let numLetters = 0;
        for(let letter of phraseLetters){
            if(letterGuess == letter.innerHTML){
                // letter.classList.remove('hide');
                // letter.classList.add('show');
                this.showMatchedLetter(letter);
                //numLetters++;
            } 
        }
    }

    showMatchedLetter(letter){
        letter.classList.remove('hide');
        letter.classList.add('show');
    }

    


}//end of Phrase class