class Cat {
  static species = "Felis catus";
  #isSleeping;
  paws = 4;
  sound = "meow";

  constructor(name, favouriteToy) {
    this.name = name;
    this.favouriteToy = favouriteToy;
  }

  static herd() {
    throw new Error(`You can't do that.`);
  }
  play() {
    console.log(`Playing with ${this.favouriteToy}.`);
    this.#takeNap();
  }
  #takeNap() {
    this.#isSleeping = true;
  }
}

const cat1 = new Cat("Mr. Furly", "tinfoil");
const cat2 = new Cat("Sparky", "box");

/* cat1.play(); */
/* console.log(cat1);
console.log(cat2);
console.log(cat1.paws);
console.log(Cat.herd()); */

class ShortHair extends Cat {
  fur = "short";

  constructor(name, favouriteToy) {
    super(name, favouriteToy);
  }
}

const cat3 = new ShortHair("Murray", "keyboard");
console.log(cat3.fur);
