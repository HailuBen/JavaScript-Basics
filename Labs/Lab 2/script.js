function displayLogsToDOM() {
    const logDiv = document.getElementById("log");

    const oldLog = console.log;

    console.log = function (...args) {
        oldLog(...args);

        logDiv.innerHTML += args.join(" ") + "<br>";
    };
}
displayLogsToDOM();

let songs = ["Treasure", "Rap God", "Levitating"];
let artists = ["Bruno Mars", "Eminem", "Dua Lipa"];
let genres = ["Pop", "Rap", "Dance"];
let favorites = ["Treasure", "Levitating"];
console.log("Songs:", songs);
console.log("Artists:", artists);
console.log("Genres:", genres);
console.log("Favorites:", favorites);
console.log(" ");


function displaySelectedSongs() {
    let firstSong = songs[0];
    let middleSong = songs[Math.floor(songs.length / 2)];
    let lastSong = songs[songs.length - 1];
    console.log("First Song:", firstSong);
    console.log("Middle Song:", middleSong);
    console.log("Last Song:", lastSong);
    console.log(" ");
}

function showMusicStats() {
    let totalSongs = songs.length;
    let totalArtists = artists.length;
    console.log("Total Songs:", totalSongs);
    console.log("Total Artists:", totalArtists);
    console.log(" ");
}

function addSongs() {
    songs.push("Grenade");
    songs.unshift("Houdini");
    console.log("Songs after adding:", songs);
    console.log(" ");
}

function removeSongs() {
    let removedLast = songs.pop();
    let removedFirst = songs.shift();
    console.log("Removed first song:", removedFirst);
    console.log("Removed last song:", removedLast);
    console.log("Songs after removing:", songs);
    console.log(" ");
}

function displayAllSongsForEach() {
    console.log("All Songs:");
    songs.forEach(function (song) {
        console.log(song);
    });
}

function createFormattedSongList() {
    let formattedSongs = songs.map(function (song, index) {
        return (index) + ". 🎵 " + song + " 🎶";
    });
    console.log("Formatted Songs:", formattedSongs);
    console.log(" ");
}

function searchArray() {
    let songToSearch = "Levitating";
    let position = songs.indexOf(songToSearch);
    let exists = songs.includes(songToSearch);
    if (exists) {
        console.log(songToSearch + " found at " + position);
    } else {
        console.log("Not found");
    }
}

const [firstSong, secondSong] = songs;
console.log("First Song:", firstSong);
console.log("Second Song:", secondSong);
const [first, third] = songs;
console.log("First:", first);
console.log("Third:", third);

displaySelectedSongs();
showMusicStats();
addSongs();
removeSongs();
displayAllSongsForEach();
createFormattedSongList();
searchArray();









