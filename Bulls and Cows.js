/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    "use strict"
    var secretArray = secret.split("");
    var guessArray = guess.split("");
    var bullCount = 0,
        cowCount = 0,
        length = secretArray.length;
    for (var i = 0; i < length; i++) {
        if (secretArray[i] === guessArray[i]) {
            bullCount++;
            secretArray.splice(i, 1);
            guessArray.splice(i, 1);
            length--;
            i--;
        }
    }
    for (var i = 0; i < length; i++) {
        let index = guessArray.indexOf(secretArray[i]);
        if (index >= 0) {
            cowCount++,
            guessArray.splice(index, 1);
        }
    }
    return bullCount + "A" + cowCount + "B";
};
