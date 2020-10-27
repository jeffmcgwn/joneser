const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option')

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voicesSelect.appendChild(option);
    })
}

// Set text
function setTextMessage(text) {
   message.text = text;
}

// Speak text
function speakText() {
   speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
   message.voice = voices.find(voice => voice.name === e.target.value);
}
// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);


 // Change voice
 voicesSelect.addEventListener('change', setVoice);

 // Read text button
 readBtn.addEventListener('click', () => {
     setTextMessage(textarea.value);
     speakText();
     btTalk();
     console.log(textarea.value.length);
 })
 getVoices();

 function btTalk () {
    document.querySelector('.bttop').classList.add('talk');
    setTimeout(function() { document.querySelector('.bttop').classList.remove('talk'); }, (textarea.value.length * 100))

 }