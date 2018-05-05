var gameWords = ["JUGGERNOG", "DOUBLETAP", "SPEEDCOLA", "QUICKREVIVE", "RICHTOFEN", "DEMPSEY", "TAKEO","NIKOLAI", "VULTUREAID", "WUNDERFIZZ", "GOBBLEGUM", "DINGO", "WINDSTAFF", "ORIGINS", "SAMANTHA", "MAXIS", "ASCENSION", "EASTEREGG", "DIERISE", "PANZERSOLDAT"];
var winCounter = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var wordLetters = [];
var currentWord = [];

function startGame(){
    var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    wordLetters = randomWord.split("");

    guessesLeft = 12;
    lettersGuessed = [];
    currentWord = [];
    

    for (i=0; i<wordLetters.length; i++){
        currentWord.push("_");
    }
        console.log(randomWord);
        console.log(currentWord);

    document.getElementById("newWord").innerHTML = currentWord.join(" ");
    document.getElementById("guessAmount").innerHTML = "Number of guesses remaining = " + guessesLeft;
    document.getElementById("winTotal").innerHTML = "Wins = " + winCounter;
};

document.onkeydown = function(event) {
    if (!(event.keyCode >= 65 && event.keyCode <= 90))
    
    return;

    var guess = event.key.toUpperCase();

    for (i=0; i<lettersGuessed.length; i++)

    if (guess === i)

    return;

    else{
        lettersGuessed.push;
        document.getElementById("guessLetter").innerHTML = "Letters you have guessed: " + lettersGuessed;
    }


        
        console.log(guess);
}
