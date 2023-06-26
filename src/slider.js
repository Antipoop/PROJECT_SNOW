let i = 0;
const interface = document.getElementById("interface") 
const background = document.getElementById("bg");
const backgrounds = ['img/background/office.jpg', 'img/background/corridor.png', 'img/background/parking.jpg']
const next = () => {
  if (i < 7) {
    i++;
    char(i);
    if (i === 1) {
      background.src = backgrounds[0];
      playOffice() 
    } else if (i === 3) {
      background.src = backgrounds[1];
      stopOffice();
      playCorridor();
    } else if (i === 5) {
      background.src = backgrounds[2];
      stopCorridor();
      playParking();
    }
  }
}
const ex = () => {
  if (i > 1) {
    i--;
    char(i);
    if (i === 2) {
      background.src = backgrounds[0];
      stopCorridor();
      playOffice();
    } else if (i === 4) {
      background.src = backgrounds[1];
      stopParking();
      playCorridor();
    } else if (i === 6) {
      background.src = backgrounds[2];
      playParking();
    }
  }
}
