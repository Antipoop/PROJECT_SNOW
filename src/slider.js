let i = 0;
const background = document.getElementById("bg");
const backgrounds = ['img/background/army.png', 'img/background/blackvoid.png', 'img/background/hospital.png', 'img/background/nsa_base.png', 'img/background/nsa_base2.png', 'img/background/magazines copy.png'];
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
      background.src = backgrounds[1];
    } else if (i === 2) {
      background.src = backgrounds[0];
    } else if (i === 7) {
      background.src = backgrounds[2];
    } else if (i === 12) {
      background.src = backgrounds[1];
    } else if (i === 15) {
      background.src = backgrounds[3];
    } else if (i === 28) {
      background.src = backgrounds[1];
    } else if (i === 36) {
      background.src = backgrounds[4];
    } else if (i === 50) {
      background.src = 'img/computer/NSA.png';
      character.style.top = '-100%'
      interface.style.bottom = '-100%';
      gradient.style.bottom = '-100%'
      computer.style.top = '10%';
    } else if (i === 53) {
      background.src = backgrounds[1];
    } else if (i === 55) {
      background.src = backgrounds[1];
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

const backupdiv = document.getElementById('backupdiv')
const copys = () => {
  backupdiv.style.bottom = '40vh'
}
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2')
const m3 = document.getElementById('m3')

const minigame = () => {
  i++;
  interface.style.bottom = '4%';
  character.style.top = '0';
  gradient.style.bottom = '0'
  char(i);
  background.src = backgrounds[4];
}


const mini1 = () => {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    krug1.style.width = 100 - timePassed/100 + '%';
    krug2.style.width = 100 - timePassed/100 + '%';
    krug3.style.width = 100 - timePassed/100 + '%';

    if (timePassed > 3000) clearInterval(timer);

  }, 2);
}