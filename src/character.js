const character = document.getElementById('character');
const characters = [' ', 'img/character/ben.png', 'img/character/doctor.png', 'img/character/security.png'];
const text = [
  'Все началось в 2004 году',
  '...',
  'Чувствуя свой долг перед людьми, я отправился в армию чтобы в дальнейшем принять участие в военных действиях в Ираке',
  'Я чувствовал, что, как человеческое существо, я обязан помочь людям освободиться от угнетения...',
  'Но к сожалению эту затею пришлось быстро оставить...',
  '...',
  'Из-за повышенной нагрузки у вас случился стрессовый перелом на обе ноги, придется полежать тут пару месяцев и на поправку выйдете!',
  'А когда я смогу вернуться в строй?',
  'Боюсь, что вам больше нельзя возвращаться в строй или в следующий раз последствия могут быть серьезнее...',
  'Я подпишу официальное комиссование, а родину защищать можно и подругому.',
  '...',
  'Как и сказал врач, родину защищать можно и иным способом, так что после выписки я нашел себе работу на территории Университета Мэриленда в качестве охраны секретных объектов',
  'В 2006 году после ярмарки вакансий меня назначили в отдел глобальных коммуникаций ЦРУ',
  'Там меня отправили в секретную школу для специалистов по технологиям, где я жил в отеле в течение шести месяцев, занимаясь полный рабочий день',
  'Привет! Я тот самый что тебя развед данными по бухаресту снабжать должен!',
  'Если ты тот самый Эд Сноу?',
  'Ну вроде пока да',
  'Значит все правильно. Пойдем покажу что да как',
  'Разве я не должен выйти из комнаты? У меня нет допуска к софту АНБ',
  'Если ты наш полевой агент, то так или иначе развед данные получаешь, а значит и не смертельно будет если увидишь как эти данные добываются',
  'И... Как это работает? Что там? Имена?',
  'Все что угодно. 99% улов сбора данных, со всех площадок что можно представить.',
  'Фильтрация по ключевому слову, как гугл, но только среди частных записей, типо в эмейлах, чатах, смсках и тд.',
  'И кто все эти люди? Чьи данные?',
  'Всех королевств до которых дотянемся',
  'Хех. Ты прям как Белоснежка, а я ведьма что кормлю тебя отравленным яблоком',
  'Многое из того, что я видел в Женеве, реально избавило меня от иллюзий о том, как действует моё правительство и что это приносит миру',
  'Я пытался закрыть на это глаза, веря что используется это всё только на благо общества',
  'Но когда в дальнейшем я своими глазами увидел как благодаря этому можно подглядывать за камерами любого человека зная лишь его эмейл...',
  '...и как вдальнейшем ЦРУ подстраивало чужие аварии в нетрезвом виде дабы вербовать информаторов...',
  '...Я понял, что я — часть того, что приносит намного больше вреда, чем пользы.',
  'В итоге я уволился и ушел работать в консалтинговые компании работающие с АНБ.',
  'Меня назначили инструковать высших должностных лиц и военных офицеров о том, как защищать свои сети от китайских хакеров.',
  'Мне было интересно изучать Китай и его массовую слежку, и примерно в тоже время у меня появилась идея...',
  'О! Привет Белоснежка! А ты разве не на отпускных?',
  'Да... вот что-то пришел посмотреть как вы тут без меня...',
  'Ну, ты как раз вовремя, пароли недавно сбросили с аккаунтов, там сейчас везде пароль такой же как и логин, так что потом сбросить его не забудь',
  'Вау, компания мирового масштаба, а в случае ЧП сбрасывает пароли до имени пользователя (вы вспомнили что логин вашего компьютера был EDSNOWDEN)',
  'Ладно. А что за кипиш?',
  'Помнишь про захват интернета в Сирии?',
  'Ну допустим',
  'Тревор и его бойцы обрушили главный роутер',
  'И в итоге вся страна лишилась интернета',
  'Охренеть... ну и влетит же ему...',
  'Это точно... ну ладно, я наверное уйду поработаю немного',
  'Больше года я копил различные данные о правительственных программах электронного шпионажа...',
  'Скоро все узнают правду...',
  'Чем это мы тут занимаемся?',
  'Гостайны воруем :)',
  '*смеется*',
  '...',
  '6 Июня 2013г. мир стал чуточку честнее'
];
const names = ['Мысли', 'Сноу', 'Бен', 'Доктор', 'Охранник'];
const arr = [0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 0, 0, 0, 0, 0, 2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 1, 2, 1, 2, 2, 1, 2, 0, 0, 4, 1, 4, 0, 0, 0];
const char = (i) => {
  document.getElementById('text').innerText = text[i - 1];
  if (arr[i - 1] === 0) {
    document.getElementById('nameId').innerText = names[0];
  } else if (arr[i - 1] === 1){
    document.getElementById('nameId').innerText = names[1];
  } else if (arr[i - 1] === 2){
    document.getElementById('nameId').innerText = names[2];
  } else if (arr[i - 1] === 3){
    document.getElementById('nameId').innerText = names[3];
  } else if (arr[i - 1] === 4){
    document.getElementById('nameId').innerText = names[4];
  }
  return character.src = characters[arr[i - 1]];
}