var gameWords = [
    { word: "JUGGERNOG", sound: "assets/audio/Juggernog.mp3", picture: "assets/images/Juggernog.jpg" }, { word: "DOUBLETAP", sound: "assets/audio/DoubleTap.mp3", picture: "assets/images/DoubleTap.jpg" }, { word: "SPEEDCOLA", sound: "assets/audio/SpeedCola.mp3", picture: "assets/images/SpeedCola.jpg" },
    { word: "QUICKREVIVE", sound: "assets/audio/QuickRevive.mp3", picture: "assets/images/QuickRevive.jpg" }, { word: "RICHTOFEN", sound: "assets/audio/Richtofen.mp3", picture: "assets/images/Richtofen.jpg" }, { word: "DEMPSEY", sound: "assets/audio/Dempsey.mp3", picture: "assets/images/Dempsey.png" },
    { word: "TAKEO", sound: "assets/audio/Takeo.mp3", picture: "assets/images/Takeo.jpg" }, { word: "NIKOLAI", sound: "assets/audio/Nikolai.mp3", picture: "assets/images/Nikolai.jpg" }, { word: "VULTUREAID", sound: "assets/audio/VultureAid.mp3", picture: "assets/images/VultureAid.jpg" },
    { word: "WUNDERFIZZ", sound: "assets/audio/Wunderfizz.mp3", picture: "assets/images/Wunderfizz.png" }, { word: "GOBBLEGUM", sound: "assets/audio/Gobblegum.mp3", picture: "assets/images/Gobblegum.png" }, { word: "DINGO", sound: "assets/audio/Dingo.mp3", picture: "assets/images/Dingo.png" },
    { word: "WINDSTAFF", sound: "assets/audio/WindStaff.mp3", picture: "assets/images/WindStaff.png" }, { word: "ORIGINS", sound: "assets/audio/Origins.mp3", picture: "assets/images/Origins.png" }, { word: "SAMANTHA", sound: "assets/audio/Samantha.mp3", picture: "assets/images/Samantha.png" },
    { word: "MAXIS", sound: "assets/audio/Maxis.mp3", picture: "assets/images/Maxis.png" }, { word: "ASCENSION", sound: "assets/audio/Ascension.mp3", picture: "assets/images/Ascension.jpg" }, { word: "EASTEREGG", sound: "assets/audio/EasterEgg.mp3", picture: "assets/images/EasterEgg.jpg" },
    { word: "DIERISE", sound: "assets/audio/DieRise.mp3", picture: "assets/images/DieRise.jpg" }, { word: "PANZERSOLDAT", sound: "assets/audio/Panzersoldat.mp3", picture: "assets/images/Panzersoldat.jpg" }];
var winCounter = 0;
var guessesLeft = 12;
var lettersGuessed = [];
var wordLetters = [];
var currentWord = [];
var currentGameWord;

function startGame() {
    currentGameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    wordLetters = currentGameWord.word.split("");

    guessesLeft = 12;
    lettersGuessed = [];
    currentWord = [];


    for (i = 0; i < wordLetters.length; i++) {
        currentWord.push("_");
    }

    document.getElementById("newWord").innerHTML = currentWord.join(" ");
    document.getElementById("guessAmount").innerHTML = "Number of guesses remaining = " + guessesLeft;
    document.getElementById("winTotal").innerHTML = "Wins = " + winCounter;
    document.getElementById("guessLetter").innerHTML = "Letters already guessed: " + lettersGuessed;

};

document.onkeydown = function (event) {
    if (!(event.keyCode >= 65 && event.keyCode <= 90))

        return;

    var guess = event.key.toUpperCase();
    if (lettersGuessed.length == 0 || lettersGuessed.indexOf(guess) == -1) {
        lettersGuessed.push(guess);

        var guessCorrect = false;
        for (i = 0; i < wordLetters.length; i++) {

            if (guess == wordLetters[i]) {
                currentWord[i] = guess;
                guessCorrect = true;
            }

            document.getElementById("guessLetter").innerHTML = "Letters already guessed: " + lettersGuessed;
            document.getElementById("newWord").innerHTML = currentWord.join(" ");



        }
        if (!guessCorrect) {
            guessesLeft--;
            document.getElementById("guessAmount").innerHTML = "Number of guesses remaining = " + guessesLeft;
        }


    }

    if (currentWord.toString() == wordLetters.toString()) {
        winCounter++;
        document.getElementById("winTotal").innerHTML = "Wins = " + winCounter;
        var audio = document.getElementById("audioplayer");
        audio.innerHTML = "<source src=\"" + currentGameWord.sound + "\" type=\"audio/mp3\">";
        audio.load();
        audio.play();

        var image = document.getElementById("main-image");
        image.src = currentGameWord.picture;
        document.getElementById("Winner").innerHTML = currentGameWord.word
        //Setup another word
        startGame();
    }

    else if (guessesLeft == 0) {
        var loser = { word: "Zombies", sound: "assets/audio/Zombies.mp3", picture: "assets/images/Zombies.jpg" };
        var audio = document.getElementById("audioplayer");
        audio.innerHTML = "<source src=\"" + loser.sound + "\" type=\"audio/mp3\">";
        audio.load();
        audio.play();
        var image = document.getElementById("main-image");
        image.src = loser.picture;
        document.getElementById("Winner").innerHTML = "You Have Been Eaten!";

        startGame();

    }

}
