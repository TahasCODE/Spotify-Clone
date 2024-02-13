
 let songIndex = 0;
const audioElement = new Audio("songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
const myProgressBar = document.querySelector("#myProgressBar");
const gif = document.querySelector("#gif");
const masterSongName = document.querySelector("#masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));


const songs = [
    {songName:"Money in the Grave-Drake" , filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Whats Poppin - (Dbaby,JackHarlow,ToryLanez)" , filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"First Class-Jack Harlow" , filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Churchills Down-(Drake & Jack Harlow)" , filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Agora Hills songIndex- Doja Cat" , filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Jimmy Crooks-Drake" , filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Money Trees-Kendrick Lamar" , filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"StarBoy - The Weekend" , filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"Sum 2 Prove - LIL BABY" , filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"Emotionally Scarred - LIL BABY" , filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
];

songItem.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach(element =>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(element => {
   element.addEventListener("click", (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerHTML = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    
   })
});

document.getElementById("next").addEventListener("click",()=>{
if(songIndex >= 9){
    songIndex = 0;
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerHTML = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove("fa-circle-play");
masterPlay.classList.add("fa-circle-pause");
gif.style.opacity = 1;

});

document.getElementById("previous").addEventListener("click",()=>{
if(songIndex <= 0){
    songIndex = 0;
}
else{
    songIndex += 1;
}
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerHTML = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove("fa-circle-play");
masterPlay.classList.add("fa-circle-pause");
gif.style.opacity = 1;

});