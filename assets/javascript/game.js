var gameWords = [
    {word:"JUGGERNOG", sound:"assets/audio/Juggernog.mp3", picture:"assets/images/Juggernog.jpg"},{word:"DOUBLETAP", sound:"assets/audio/DoubleTap.mp3", picture:"assets/images/DoubleTap.jpg"}, {word:"SPEEDCOLA", sound:"", picture:""},
    {word:"QUICKREVIVE", sound:"",picture:""}, {word:"RICHTOFEN", sound:"",picture:""}, {word:"DEMPSEY", sound:"", picture:""},
    {word:"TAKEO", sound:"",picture:""}, {word:"NIKOLAI", sound:"",picture:""}, {word:"VULTUREAID", sound:"", picture:""},
    {word:"WUNDERFIZZ", sound:"",picture:""}, {word:"GOBBLEGUM", sound:"",picture:""}, {word:"DINGO", sound:"", picture:""},
    {word:"WINDSTAFF", sound:"",picture:""}, {word:"ORIGINS", sound:"",picture:""}, {word:"SAMANTHA", sound:"", picture:""},
    {word:"MAXIS", sound:"",picture:""}, {word:"ASCENSION", sound:"",picture:""}, {word:"EASTEREGG", sound:"", picture:""},
    {word:"DIERISE", sound:"",picture:""}, {word:"PANZERSOLDAT", sound:"", picture:""}];
var winCounter = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var wordLetters = [];
var currentWord = [];
var currentGameWord;

function startGame(){
    currentGameWord = gameWords[1];//[Math.floor(Math.random() * gameWords.length)];
    wordLetters = currentGameWord.word.split("");

    guessesLeft = 12;
    lettersGuessed = [];
    currentWord = [];
    

    for (i=0; i<wordLetters.length; i++){
        currentWord.push("_");
    }

    document.getElementById("newWord").innerHTML = currentWord.join(" ");
    document.getElementById("guessAmount").innerHTML = "Number of guesses remaining = " + guessesLeft;
    document.getElementById("winTotal").innerHTML = "Wins = " + winCounter;
    document.getElementById("guessLetter").innerHTML ="Letters already guessed:" + lettersGuessed;

};

document.onkeydown = function(event) {
    if (!(event.keyCode >= 65 && event.keyCode <= 90))
    
    return;

    var guess = event.key.toUpperCase();
    if(lettersGuessed.length == 0 || lettersGuessed.indexOf(guess) == -1){
        lettersGuessed.push(guess);
        
        var guessCorrect = false;
        for(i=0; i<wordLetters.length; i++){

            if(guess == wordLetters[i]){
                currentWord[i] = guess;
                guessCorrect = true;
            }            
            
            document.getElementById("guessLetter").innerHTML ="Letters already guessed:" + lettersGuessed;
            document.getElementById("newWord").innerHTML = currentWord.join(" ");
            

                        
        }   
        if (!guessCorrect){
            guessesLeft--;
            document.getElementById("guessAmount").innerHTML = "Number of guesses remaining = " + guessesLeft;
        }

        
    }

    if(currentWord.toString() == wordLetters.toString()){
        winCounter++;
        document.getElementById("winTotal").innerHTML = "Wins = " + winCounter;
        var audio = document.getElementById("audioplayer");
        audio.innerHTML = "<source src=\"" + currentGameWord.sound + "\" type=\"audio/mp3\">";
        audio.load();
        audio.play();

        var image = document.getElementById("main-image");
        image.src = currentGameWord.picture;
        //Setup another word
        startGame();
    }

    else if(guessesLeft == 0){
        
        startGame();

    }

}
