const gameFuncionality = () => {
  const gameImages = document.querySelectorAll(".game-img");
  const gameDropZones = document.querySelectorAll(".game-card");
  const restartGameBtn = document.querySelector(".restart-button");

  restartGameBtn.addEventListener("click", () => {
    window.location.reload();
  });

  for (let gameImage of gameImages) {
    let elementURL = gameImage.getAttribute("src");
    let imgURL;

    gameImage.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text", elementURL);
    });

    for (let dropZone of gameDropZones) {
      dropZone.addEventListener("dragover", event => {
        event.preventDefault();
      });

      dropZone.addEventListener("drop", event => {
        imgURL = event.dataTransfer.getData("text");
        let newImg = `<img src=${imgURL} />`;
        dropZone.innerHTML = newImg;

        if (imgURL === elementURL) gameImage.classList.add("hide");

        event.dataTransfer.clearData("text");
      });
    }
  }
};

export default gameFuncionality;
