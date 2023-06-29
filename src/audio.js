const audioOffice = document.getElementById('office');
const audioCorridor = document.getElementById('corridor');
const audioParking = document.getElementById('parking');
const volume = 0.1
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
playOffice()