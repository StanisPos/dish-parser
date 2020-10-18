const fs = require('fs');
const path = require('path');
const { noop } = require('lodash');

module.exports = class Abstract {
  constructor(name) {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract`);
    } else {
      setTimeout(() => this.init());
    }

    this.name = name;
  }

  getMockApiPath() {
    return path.join(__dirname, '..', '..', 'mock-json-db', 'api', `${this.name}.json`);
  }

  init() {
    noop();
  }

  readFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        }

        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  writeFile(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.file, JSON.stringify(data), err => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  }

  isExistsFile() {
    return new Promise(resolve => {
      fs.access(this.file, err => {
        if (err?.message.includes('no such file')) {
          resolve(false);
        }

        resolve(true);
      });
    });
  }

  throwError(err) {
    if (err) {
      throw err;
    }
  }
};
