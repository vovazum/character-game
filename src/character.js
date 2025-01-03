// Базовый класс Character
class Character {
    constructor(name, type) {
      const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
  
      if (typeof name !== "string" || name.length < 2 || name.length > 10) {
        throw new Error("Имя должно быть строкой длиной от 2 до 10 символов");
      }
  
      if (!validTypes.includes(type)) {
        throw new Error("Некорректный тип персонажа");
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  
    levelUp() {
      if (this.health <= 0) {
        throw new Error("Нельзя повысить уровень умершего персонажа");
      }
  
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    }
  
    damage(points) {
      if (this.health <= 0) return;
  
      const damageTaken = points * (1 - this.defence / 100);
      this.health = Math.max(0, this.health - damageTaken);
    }
  }
  
  // Дочерние классы
  class Bowerman extends Character {
    constructor(name) {
      super(name, "Bowman");
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, "Swordsman");
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name, "Magician");
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Daemon extends Character {
    constructor(name) {
      super(name, "Daemon");
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name, "Undead");
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name, "Zombie");
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  // Экспортируем классы
  module.exports = { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };
  