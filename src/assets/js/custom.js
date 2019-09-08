function ass()
{
//const btn = document.querySelector('.talk');
//const content = myHeading;
const greetings = ['Greetings','Hey what\'s up','How\'s your life?'];
const weather = ['Weather is fine','You need a tan'];
const bank = ['Hi,We are from Syndicate bank'];
const problem = ['Your issue has been sent to our employees,it will be resolved within two days.'];
const offer = ['offers are loan offer,special customer offer'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
          console.log('voice is activated');          
};

recognition.onresult = function(event) {
       console.log(event);
       const current = event.resultIndex;
       const transcript = event.results[current][0].transcript;
       //content.textContent = transcript;
       readOutLoud(transcript);
};

//btn.addEventListener('click',()=> {
                recognition.start();
//}); 

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Sorry,can you please repeat it once more';
    if(message.includes('how are you')){
         const finalText = greetings[Math.floor(Math.random() * greetings.length)];
         speech.text = finalText;
         
    }
    if(message.includes('hi')){
         const finalText = bank[Math.floor(Math.random()*bank.length)];
         speech.text = finalText;
    }
    if(message.includes('I want to know about the offers')){
           const finalText = offer[Math.floor(Math.random()*offer.length)];
           speech.text = finalText;
    }
    if(message.includes('I want to refund my offer money')){
     const finalText = problem[Math.floor(Math.random()*problem.length)];
     speech.text = finalText;
   }

    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
    
}
}