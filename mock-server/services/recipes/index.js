const Abstract = require('../abstract/index');

const recipes = [
  {
    id: 1,
    name: 'test one',
    image: 'https://dikoedru.ru/local/templates/dikoed/assets/img/icon_eat.svg',
    description: 'КБЖУ тест/тест',
    quantity: 100,
    units: 'г',
    origin: 'testtest1',
    someArray: ['first', 'second'],
  },
  {
    id: 2,
    name: 'test two',
    image: 'https://dikoedru.ru/local/templates/dikoed/assets/img/icon_eat.svg',
    description: 'КБЖУ тест/тест',
    quantity: 10,
    units: 'л',
    origin: 'testtest2',
    someArray: ['first', 'second', 'third'],
  },
  {
    id: 3,
    name: 'test three',
    image: 'https://dikoedru.ru/local/templates/dikoed/assets/img/icon_eat.svg',
    description: 'КБЖУ тест/тест',
    quantity: 2,
    units: 'шт',
    origin: 'testtest2',
    someArray: ['first', 'second', 'third'],
  },
];

class Recipes extends Abstract {
  constructor(name = 'recipes') {
    super(name);

    this.file = this.getMockApiPath();
  }

  init() {
    console.log(`init: ${this.name}`);
  }

  getRecipes(req, res) {
    res.send(JSON.stringify(recipes));
  }

  getRecipesWithId(req, res) {
    const id = req.params.id || 0;
    let result = {};

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id === id) {
        result = recipes[i];
        break;
      }
    }

    res.send(JSON.stringify(result));
  }
}

module.exports = new Recipes();
