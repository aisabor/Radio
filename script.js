document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  const playPauseButton = document.getElementById("play-pause-button");
  const currentSongElement = document.getElementById("current-song");
  const audioOptions = document.querySelectorAll(".audio-option");


  let recentlyPlayed = null;

  function playAudio(src) {
    audioSource.src = src;
    audioPlayer.load();
    audioPlayer.play();
    recentlyPlayed = src;
  }

  playPauseButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.textContent = "Pause";
      playPauseButton.classList.remove("play");
      playPauseButton.classList.add("pause");
    } else {
      audioPlayer.pause();
      playPauseButton.textContent = "Play";
      playPauseButton.classList.remove("pause");
      playPauseButton.classList.add("play");
    }
  });

  audioOptions.forEach(option => {
    option.addEventListener("click", () => {
      audioOptions.forEach(btn => btn.classList.remove("active"));
      option.classList.add("active");
      playAudio(option.getAttribute("data-src"));
      currentSongElement.textContent = `Now Playing: ${option.textContent}`;
     
    });
  });



  audioPlayer.addEventListener("", () => {
    currentSongElement.textContent = "Paused";
    playPauseButton.classList.remove("pause");
    playPauseButton.classList.add("play");
  });
});
