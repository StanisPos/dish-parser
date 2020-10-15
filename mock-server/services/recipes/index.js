const Abstract = require('../abstract/index');

const recipes = [
  {
    id: 1,
    name: 'test1',
    origin: 'testtest1',
    someArray: ['first', 'second'],
  },
  {
    id: 2,
    name: 'test2',
    origin: 'testtest2',
    someArray: ['first', 'second', 'third'],
  },
];
console.log(Abstract);
class Recipes extends Abstract {
  constructor(name) {
    super(name);

    this.file = super.getMockApiPath();
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

module.exports = new Recipes('recipes');
