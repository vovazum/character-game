const { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } = require('../character');

test('Создание персонажа Bowerman', () => {
  const bowerman = new Bowerman('Hero');
  expect(bowerman).toEqual({
    name: 'Hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание персонажа Swordsman', () => {
  const swordsman = new Swordsman('Warrior');
  expect(swordsman).toEqual({
    name: 'Warrior',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Создание персонажа Magician', () => {
  const magician = new Magician('Mage');
  expect(magician).toEqual({
    name: 'Mage',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Проверка метода levelUp', () => {
  const bowerman = new Bowerman('Hero');
  bowerman.levelUp();
  expect(bowerman.level).toBe(2);
  expect(bowerman.attack).toBe(30); // 25 * 1.2
  expect(bowerman.defence).toBe(30); // 25 * 1.2
  expect(bowerman.health).toBe(100);
});

test('Проверка метода levelUp для умершего персонажа', () => {
  const swordsman = new Swordsman('Warrior');
  swordsman.health = 0;
  expect(() => swordsman.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('Проверка метода damage', () => {
  const zombie = new Zombie('Walker');
  zombie.damage(50);
  expect(zombie.health).toBe(55); // 100 - 50 * (1 - 10 / 100)
});

test('Проверка метода damage для персонажа с 0 здоровьем', () => {
  const daemon = new Daemon('Evil');
  daemon.health = 0;
  daemon.damage(50);
  expect(daemon.health).toBe(0); // Умерший персонаж не получает урон
});
