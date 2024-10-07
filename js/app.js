var synth = window.speechSynthesis; 
var textToSpeak = ''; 
var sentence = ''; 

const subjects = ["The dog", "A cat", "The teacher", "My friend", "The robot"];
const verbs = ["jumps", "runs", "eats", "sleeps", "talks"];
const adjectives = ["funny", "lazy", "excited", "hungry", "sleepy"];
const nouns = ["pizza", "ball", "book", "car", "computer"];
const places = ["in the park", "at home", "at school", "on the moon", "under the bed"];

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

document.getElementById('subjectButton').addEventListener('click', function() {
    sentence += getRandomElement(subjects) + " ";
});

document.getElementById('verbButton').addEventListener('click', function() {
    sentence += getRandomElement(verbs) + " ";
});

document.getElementById('adjectiveButton').addEventListener('click', function() {
    sentence += getRandomElement(adjectives) + " ";
});

document.getElementById('nounButton').addEventListener('click', function() {
    sentence += getRandomElement(nouns) + " ";
});

document.getElementById('placeButton').addEventListener('click', function() {
    sentence += getRandomElement(places) + " ";
});

document.getElementById('speakButton').addEventListener('click', function() {
    textToSpeak = sentence;
    speakNow(textToSpeak);
    document.getElementById('storyOutput').innerText = textToSpeak; 
});

document.getElementById('resetButton').addEventListener('click', function() {
    sentence = "";
    document.getElementById('storyOutput').innerText = "";
});
