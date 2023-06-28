let i = 0;
const background = document.getElementById("bg");
const backgrounds = ['img/background/office.jpg', 'img/background/corridor.png', 'img/background/parking.jpg'];
const interface = document.getElementById("interface");
const gradient = document.getElementById("gd")
const computer = document.getElementById("computer")
const next = () => {
  if (i < 8) {
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
    } else if (i === 8) {
      stopParking()
      background.src = 'img/computer/NSA.png';
      character.style = '-100%';
      interface.style.top = '-100%';
      gradient.style.top = '-100%'
      computer.style.top = '10%'
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
