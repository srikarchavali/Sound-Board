playA = document.getElementById("btnA");
audioA = document.getElementById("audioA");
playA.setAttribute("tableIndex", 0);

playA.addEventListener("click", ()=>{
    audioA.play();
})
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 65){
        audioA.play();
        playA.style.background = "rgba(148, 150, 150, 0.8)";
        playA.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playA.style.background = "white";
            playA.style.top = "0";  
        })  
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
        playS.style.background = "rgb(46, 45, 45)";
        playS.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playS.style.background = "black";
            playS.style.top = "0";   
        })
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
        playD.style.background = "rgb(46, 45, 45)";
        playD.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playD.style.background = "black";
            playD.style.top = "0";   
        })  
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
        playF.style.background = "rgb(46, 45, 45)";
        playF.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playF.style.background = "black";
            playF.style.top = "0";   
        })  
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
        playJ.style.background = "rgb(46, 45, 45)";
        playJ.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playJ.style.background = "black";
            playJ.style.top = "0";   
        })  
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
        playK.style.background = "rgb(46, 45, 45)";
        playK.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playK.style.background = "black";
            playK.style.top = "0";   
        })  
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
        playL.style.background = "rgb(46, 45, 45)";
        playL.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            playL.style.background = "black";
            playL.style.top = "0";   
        })  
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
        play.style.background = "rgb(46, 45, 45)";
        play.style.top = "5px";
        window.addEventListener("keyup", (e)=>{
            play.style.background = "black";
            play.style.top = "0";   
        })  
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