const fullScreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }
  const fullScreenGame = document.getElementById('view');
export { fullScreenGame, fullScreen }