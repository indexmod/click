const STREAM_URL = "https://stream-mixtape-geo.ntslive.net/mixtape";
const audio = document.querySelector("#audio");
const status = document.querySelector("#status");
const circles = document.querySelectorAll(".circle");

let playing = false;

function setActive(circle) {
  circles.forEach((item) => item.classList.toggle("is-active", item === circle));
}

circles.forEach((circle) => {
  circle.addEventListener("click", async () => {
    if (playing) return;

    playing = true;
    setActive(circle);
    status.textContent = "CONNECTING…";
    audio.src = STREAM_URL;

    try {
      await audio.play();
      status.textContent = "ON AIR";
    } catch (error) {
      playing = false;
      setActive(null);
      status.textContent = "STREAM UNAVAILABLE";
      console.error("Unable to start the NTS stream:", error);
    }
  });
});

audio.addEventListener("error", () => {
  playing = false;
  setActive(null);
  status.textContent = "STREAM UNAVAILABLE";
});
