const STREAM_URL = "https://stream-mixtape-geo.ntslive.net/mixtape";
const audio = document.querySelector("#audio");
const circles = document.querySelectorAll(".circle");

let playing = false;

circles.forEach((circle) => {
  circle.addEventListener("click", async () => {
    circle.classList.toggle("is-active");
    if (playing) return;

    audio.src = STREAM_URL;
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
