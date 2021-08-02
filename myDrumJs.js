const myButton = document.querySelector('.myTap');
let myAudio = document.querySelector('#audio');
myButton.addEventListener('click', () => {
    //  play audio here when clicking number 7 (the first .myTap)
});



const playAudio = (myAudio) => {
    ordAni("ani", 10);
    reverseAni("ani2", -15);
    ordAni("ani3", 40);
    myAudio.currentTime = 0;
    myAudio.play();
};

const addAnimation = (id, aniClass) => {
    var className = document.getElementById(id).className;
    var newClass = className + " " + aniClass;
    document.getElementById(id).className = newClass;
}

//  Animation in JS
function ordAni(id, pos){
    var posFront = pos + 20;
    var posBack = pos - 30;
    document.getElementById(id).animate([
        // keyframes
        { transform: 'rotate('+posFront+'deg)' },
        { transform: 'rotate('+posBack+'deg)' },
      ], {
        // timing options
        duration: 500,
      });
}

function reverseAni(id, pos){
    var posFront = pos - 30;
    var posBack = pos + 20;
    document.getElementById(id).animate([
        // keyframes
        { transform: 'rotate('+posFront+'deg)' },
        { transform: 'rotate('+posBack+'deg)' },
      ], {
        // timing options
        duration: 500,
      });
}



async function playSound(e) {
    // var sounds = document.getElementsByTagName("audio");  // (2 dong tiep theo)  Ko the dung trong ham rieng vi o duoi cos dung 'await'
    var buttons = document.getElementsByTagName("button");
    // await stopAllAudio(sounds);  // (2 dong tiep theo)  Van co the dung bthg ma ko can async await ? 
    await resetColor(buttons);
    const myKey = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${myKey}"]`);
    var myButton = document.querySelector(`button[data-key="${myKey}"]`);
    myButton.style.opacity = "0.5";
    playAudio(audio);
}


const stopAllAudio = (sounds) => {
    for (i=0; i<sounds.length; i++){
        sounds[i].pause();
    }
}


const resetColor = (buttons) => {
    for (i=0; i<buttons.length; i++){
        buttons[i].style.opacity = "1";
    }
}

const changePad = (id) => {
    console.log('Hi im here!');
    let pad1 = document.getElementById('pad1');
    let pad2 = document.getElementById('pad2');


    if (id==='pad1'){   // Neu muon hien pad1 se dung cai nay
        pad1.style.display = "flex";
        pad2.style.display = "none";

        console.log('Im done 1! :)');
    }
    else {   // Neu muon hien pad2 se dung cai nay
        pad2.style.display = "flex";
        pad1.style.display = "none";

        console.log('Im done 2! :)');
    }
}

async function fadeAway(id) {
    await makeAnimation(id);
      changePad(id);
}

function makeAnimation(id){
    if (id==='pad2'){
        document.getElementById(id).animate([
            // keyframes
            { width: '5vw', height: '5vw' },
            { width: '100%', height: '35vw' },
          ], {
            // timing options
            duration: 400,
          });
    }
    else {
        document.getElementById(id).animate([
            // keyframes
            { width: '5vw', height: '5vw' },
            { width: '100%', height: '44vw' },
          ], {
            // timing options
            duration: 400,
          });
    }
}

function getNewPad() {
    let pad1 = document.getElementById('pad1');
    let pad2 = document.getElementById('pad2');
    var id;
    if (pad1.style.display === "none"){   // Neu muon hien pad1 se dung cai nay
        id = 'pad1';
    }
    else if (pad2.style.display === "none"){   // Neu muon hien pad2 se dung cai nay
        id = 'pad2';
    }
    else {   // Lan dau chay ham no se dung cai nay (chua ro nguyen nhan)
        id = 'pad2';
    }
    fadeAway(id);
}



window.addEventListener('keydown', playSound);