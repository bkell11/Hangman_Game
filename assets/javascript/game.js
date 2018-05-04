var gameWords = ["JUGGERNOG", "DOUBLE TAP", "SPEED COLA", "QUICK REVIVE", "RICHTOFEN", "DEMPSEY", "TAKEO","NIKOLAI", "VULTURE AID", "WUNDERFIZZ", "GOBBLEGUM", "DINGO", "WIND STAFF", "ORIGINS", "SAMANTHA", "MAXIS", "ASCENSION", "EASTER EGG", "DIE RISE", "PANZERSOLDAT"];
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

    document.getElementById("currentWord").innerHTML = currentWord.join(" ");
};
