playA = document.getElementById("btnA");
audioA = document.getElementById("audioA");
playA.setAttribute("tableIndex", 0);

playA.addEventListener("click", ()=>{
    audioA.play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 65){
        audioA.play();  
    }
})

playS = document.getElementById("btnS");
audioS = document.getElementById("audioS");

playS.addEventListener("click", ()=>{
    document.getElementById("audioS").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 83){
        audioS.play();  
    }
})

playD = document.getElementById("btnD");
audioD = document.getElementById("audioD");

playD.addEventListener("click", ()=>{
    document.getElementById("audioS").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 68){
        audioD.play();  
    }
})

playF = document.getElementById("btnF");
audioF = document.getElementById("audioF");

playF.addEventListener("click", ()=>{
    document.getElementById("audioF").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 70){
        audioF.play();  
    }
})

playJ = document.getElementById("btnJ");
audioJ = document.getElementById("audioJ");

playJ.addEventListener("click", ()=>{
    document.getElementById("audioJ").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 74){
        audioJ.play();  
    }
})

playK = document.getElementById("btnK");
audioK = document.getElementById("audioK");

playK.addEventListener("click", ()=>{
    document.getElementById("audioK").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 75){
        audioK.play();  
    }
})

playL = document.getElementById("btnL");
audioL = document.getElementById("audioL");

playL.addEventListener("click", ()=>{
    document.getElementById("audioL").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 76){
        audioF.play();  
    }
})

play = document.getElementById("btn");
audio = document.getElementById("audio");

play.addEventListener("click", ()=>{
    document.getElementById("audio").play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 186){
        audio.play();  
    }
})
// adocument.getElementById('btn').onclick = function(){
//     //Getting button and listning for click
//     document.getElementById('audio').play();
//     //Utilizing the HTML Audio/Video DOM Reference to play audio/video
//     }
    
//     //to play on the key A do this(using Jquery):
//     document.addEventListener('keydown', function(e) {
//       if(e.keyCode == 65){
//       document.getElementById('audio').play();
//       }
//     });