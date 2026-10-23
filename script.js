const STREAM_URL = "https://stream-mixtape-geo.ntslive.net/mixtape";
const audio = document.querySelector("#audio");
const circles = document.querySelectorAll(".circle");

let playing = false;
let volumeLevel = 1;

circles.forEach((circle) => {
  circle.addEventListener("click", async () => {
    circle.classList.toggle("is-active");
    volumeLevel = Math.min(volumeLevel + (playing ? 1 : 0), 6);
    audio.volume = volumeLevel / 6;
    if (playing) return;

    audio.src = STREAM_URL;
    audio.volume = volumeLevel / 6;
    try {
      await audio.play();
      playing = true;
    } catch (error) {
      console.error("Unable to start the NTS stream:", error);
    }
  });
});

audio.addEventListener("error", () => {
  playing = false;
});
