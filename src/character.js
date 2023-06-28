const character = document.getElementById('character');
const characters = ['img/character/SnowAnime.png', 'img/character/snowDef.png'];
const text = ['каничива семпай',
'и тебе привет',
'Я долго ждал подходящего момента, что бы сказать...',
'Я диктор канала мастерская настроенияz',
'manki team крутые парни, но они не осетины',
'ладно',
'Жак Энтони Фреско'
];
const names = ['Snow Sempai', 'Норм Mr.Snow'];
const arr = [0, 1, 0, 1, 1, 0, 1];
const char = (i) => {
  document.getElementById('text').innerText = text[i - 1];
  if (arr[i - 1] === 0) {
    document.getElementById('nameId').innerText = names[0];
  } else {
    document.getElementById('nameId').innerText = names[1];
  }
  return character.src = characters[arr[i - 1]];
}