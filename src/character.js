const character = document.getElementById('character');
const characters = ['img/character/SnowAnime.png', 'img/character/snowDef.png'];
const arr = [0, 1, 0, 1, 1, 0, 1];
const char = (i) => {
  return character.src = characters[arr[i - 1]];
}