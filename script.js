console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs =[
    {songName: "Khali Salam Dua", filePath: "music/1.mp3", coverPath: "image/songto.jpg"},
    {songName: "Aap Se Milkar Reprise - Andhadhun", filePath: "music/2.mp3", coverPath: "image/22.jpeg"},
    {songName: "Jaane De ", filePath: "music/3.mp3", coverPath: "image/24.jpeg"},
    {songName: "Tum Saath Ho - Tamasha ", filePath: "music/4.mp3", coverPath: "image/21.jpeg"},
    {songName: "Lambiyaan Si Judaiyaan ", filePath: "music/5.mp3", coverPath: "image/22.jpeg"},
    {songName: "Main Tera Boyfriend ", filePath: "music/6.mp3", coverPath: "image/23.jpeg"},
    {songName: "Pyar Ki Kashti Mein ", filePath: "music/7.mp3", coverPath: "image/25.jpeg"},
    
]
songItems.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

//let audioElement = new Audio('1.mp3');
//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress; 

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // Pause all other songs and set current song
        makeAllPlays();

        // Get the index of the clicked song
        songIndex = parseInt(e.target.id);

        // Change the play/pause icon
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        // Set the audio source and play the song
        audioElement.src = `music/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        // Change the master play/pause icon
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previos').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
