const Abstract = require('../abstract/index');

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
