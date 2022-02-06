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
                //console.log(letter.innerHTML);
                //console.log(letterGuess);
                console.log(numLetters);

                 if(numLetters > 0  && letterGuess === letter.innerHTML){
                    letter.className = 'chosen';
                 } else if (numLetters === 0 && letterGuess === letter.innerHTML){
                    letter.className = 'wrong';
                 }
             }

        // if(numLetters === 0){
        //     const qwerty = document.getElementsByClassName('key');
        //     for(let letter of qwerty){
        //         if(letterGuess === letter.innerHTML){
        //             letter.classList.add('wrong');
        //         }
        //     }
        // }
    }

    showMatchedLetter(letter){
        letter.classList.remove('hide');
        letter.classList.add('show');
    }

    showWrongLetter(letter){

    }

    


}//end of Phrase class