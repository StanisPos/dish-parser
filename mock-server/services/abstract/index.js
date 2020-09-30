const path = require('path');
const { noop } = require('lodash');

module.exports = class Abstract {
  constructor(name) {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract`);
    } else {
      this.init();
    }

    this.name = name;
  }

  getMockApiPath() {
    return path.join(__dirname, '..', '..', 'mock-json-db', 'api', `${this.name}.json`);
  }

  init() {
    noop();
  }
};
