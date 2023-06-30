let i = 0;
const background = document.getElementById("bg");
const backgrounds = ['img/background/office.jpg', 'img/background/corridor.png', 'img/background/parking.jpg'];
const interface = document.getElementById("interface");
const gradient = document.getElementById("gd")
const computer = document.getElementById("computer")
const startBtn = document.getElementById("start")
const login = document.getElementById('login')
const password = document.getElementById("password")
const pcinterface = document.getElementById("pcint")
const copy = document.getElementById("copy")
const next = () => {
  if (i < 7) {
    i++;
    char(i);
    if (i === 1) {
      interface.style.bottom = '4%';
      character.style.top = '0'
      gradient.style.bottom = '0'
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
    } else if (i === 7) {
      stopParking()
      background.src = 'img/computer/NSA.png';
      character.style.top = '-100%'
      interface.style.bottom = '-100%';
      gradient.style.bottom = '-100%'
      computer.style.top = '10%';
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

const start = () => {
  i++;
  char(i);
  interface.style.bottom = '4%';
  character.style.top = '0'
  gradient.style.bottom = '0'
  background.src = backgrounds[0];
  playOffice()
  startBtn.remove();
}

const enter = () => {
  if (login.value === '123' && password.value === '321') {
    computer.style.top = '-100%';
    pcinterface.style.bottom = "0"
  } else {
    login.style.background = 'lightcoral';
    password.style.background = 'lightcoral'
  }
}

const copyfile = () => {
  copy.style.bottom = "30%"
}

const krug1 = document.getElementById("krug1")

const mini1 = () => {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    krug1.style.width = 100 - timePassed/100 + '%';

    if (timePassed > 2000) clearInterval(timer);

  }, 2);
}