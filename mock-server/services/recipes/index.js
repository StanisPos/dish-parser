const Abstract = require('../abstract/index');

const qwe = [
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
  constructor(name) {
    super(name);
  }

  async _findAll() {
    try {
      if (this.data) {
        return this.data;
      }

      this.data = await this.readFile();
      return this.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findOneById(id) {
    if (!id) {
      return {};
    }

    const { recipes } = await this._findAll();

    return recipes.find(recipe => recipe.id === id);
  }

  async getAllList() {
    try {
      const { recipes } = await this._findAll();
      return recipes;
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = new Recipes('recipes');
