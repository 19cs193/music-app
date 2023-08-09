console.log("welcome to Music")
//initialized variables
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');

let songs=[
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
]
//handle play pasue click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currenttime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.remove('fa-pause-play');
    }
})
//listen to events
myprogressbar.addEventListener('timeupdate',()=>{
console.log('timeupdate')
})
