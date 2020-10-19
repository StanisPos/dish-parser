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

  async _updateList() {
    await this.writeFile(this.data);
  }

  _updateItem(item) {
    try {
      const index = this.data.recipes.findIndex(recipe => recipe.id === item.id);
      this.data.recipes.map.splice(index, 1, item);

      this._updateList().then(() => console.log('Обновление прошло успешно'));

      return this.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async sortBy(direction, type) {
    console.log(this.data);
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
