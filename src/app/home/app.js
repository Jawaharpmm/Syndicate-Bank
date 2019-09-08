const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = ['Greetings','Hey what\'s up','How\'s your life?'];
const weather = ['Weather is fine','You need a tan'];
const bank = ['We are from Syndicate bank','What is your problem'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
          console.log('voice is activated');          
};

recognition.onresult = function(event) {
       //console.log(event);
       const current = event.resultIndex;
       const transcript = event.results[current][0].transcript;
       content.textContent = transcript;
       readOutLoud(transcript);
};

btn.addEventListener('click',()=> {
                recognition.start();
}); 

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'I don\'t know what are you speaking';
    if(message.includes('how are you')){
         const finalText = greetings[Math.floor(Math.random() * greetings.length)];
         speech.text = finalText;
         
    }
    if(message.includes('my problem is')){
         const finalText = bank[Math.floor(Math.random()*bank.length)];
         speech.text = finalText;
    }
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}