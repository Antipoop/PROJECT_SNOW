let i = 0;
const background= document.getElementById("bg");
const backgrounds = ['img/background/officeBackground.png', 'img/background/officeBackground2.png', 'img/background/officeBackground3.png']
const character = document.getElementById('character')
const characters = ['img/character/SnowAnime.png', 'img/character/snowDef.png'];
const audioOffice = document.getElementById('office');
const audioCorridor = document.getElementById('corridor');
const audioParking = document.getElementById('parking');
const volume = 0.1
const arr = [0, 1, 0, 1, 1, 0, 1];
const charz = (i) => {
  return character.src = characters[arr[i]];
}
const playOffice = () => {
  audioOffice.volume = volume
  audioOffice.play()
}
const playCorridor = () => {
  audioCorridor.volume = volume
  audioCorridor.play()
}
const playParking = () => {
  audioParking.volume = volume
  audioParking.play()
}
const stopOffice = () => {
  audioOffice.pause()
  audioOffice.currentTime = 0;
}
const stopCorridor = () => {
  audioCorridor.pause()
  audioCorridor.currentTime = 0;
}
const stopParking = () => {
  audioParking.pause()
  audioParking.currentTime = 0;
}
const next = () => {
  if (i < 7) {
    i++;
    charz(i);
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
    charz(i);
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
