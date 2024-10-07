var synth = window.speechSynthesis; 
var textToSpeak = ''; 
var sentence = ''; 

const subjects = ["The dog", "A cat", "The teacher", "My friend", "The robot"];
const verbs = ["jumps", "runs", "eats", "sleeps", "talks"];
const adjectives = ["funny", "lazy", "excited", "hungry", "sleepy"];
const nouns = ["pizza", "ball", "book", "car", "computer"];
const places = ["in the park", "at home", "at school", "on the moon", "under the bed"];

// Function to convert text to speech
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Button event listeners for adding random words to the sentence
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

// Button event listener to speak the sentence and show it in the storyOutput div
document.getElementById('speakButton').addEventListener('click', function() {
    textToSpeak = sentence;
    speakNow(textToSpeak);
    document.getElementById('storyOutput').innerText = textToSpeak; 
});

// Button event listener to reset the sentence
document.getElementById('resetButton').addEventListener('click', function() {
    sentence = "";
    document.getElementById('storyOutput').innerText = "";
});

// Theme toggle button event listener
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.addEventListener('click', () => {
    const body = document.body;

    // Toggle between dark-mode and light-mode classes
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Update the theme toggle button text accordingly
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }
});
