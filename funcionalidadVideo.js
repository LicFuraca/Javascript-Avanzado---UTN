const videoFuncionality = () => {
  const video = document.querySelector(".video-card video"),
    play = document.querySelector(".play"),
    pause = document.querySelector(".pause"),
    duration = document.querySelector(".duration");

  if (!video) return;

  play.addEventListener("click", () => {
    video.play();
    play.disabled = true;
    play.classList.add("disabled");
    pause.disabled = false;
    pause.classList.remove("disabled");
  });

  pause.addEventListener("click", () => {
    video.pause();
    play.disabled = false;
    play.classList.remove("disabled");
    pause.disabled = true;
    pause.classList.add("disabled");
  });

  video.addEventListener("timeupdate", () => {
    const durationTime = parseInt(video.duration).toFixed(0);
    const currentTime = parseInt(video.currentTime.toFixed(0));
    duration.textContent = `${currentTime}s / ${durationTime}s`;
  });
};

export default videoFuncionality;
