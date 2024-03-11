console.log("Welcome to Spotify")

// initialize the variable
let songIndex = 0;
let AudioElement = new Audio('songs/1.mp3');
let Masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
//AudioElement.play();

let songs = [
    { songName: "Kesariya", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Beshram", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Befikra", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Manika", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ek Villian Returns", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Dosti", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Main Khiladi", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    // {songName: "Kesariya", filepath:"song/1.mp3", coverPath: "covers/1.jpg"},
]

// Handle play/pause click
Masterplay.addEventListener('click', () => {
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play();
        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
    }
    else {
        AudioElement.pause();
        Masterplay.classList.remove('fa-pause-circle');
        Masterplay.classList.add('fa-play-circle');
    }
})



//Listen to Events
AudioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');

    // seekbar update 
    let progress = parseInt(AudioElement.currentTime);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    AudioElement.currentTime = myProgressBar.value;
})
const MakeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let index = parseInt(e.target.id)
        MakeAllPlay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        AudioElement.src = `songs/${index}.mp3`
        AudioElement.currentTime=0
        AudioElement.play();

        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
    })
})