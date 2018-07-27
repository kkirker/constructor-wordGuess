


function Letter(letter) {
    this.char = letter;
    this.guessed = false;
    this.populate = function() {
        if (this.guessed === false) {
            return "_";
        } else {
            return this.char;
        };
    };
    this.userGuess = function {
        let guess = process.argv[2];
        if (guess === this.char) {
            this.guessed = true;
        };
    };

}