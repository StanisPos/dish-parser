const fs = require('fs');
const path = require('path');

module.exports = class Abstract {
  constructor(name) {
    if (new.target === Abstract) {
      throw new Error(`Can't instantiate Abstract`);
    } else {
      setTimeout(() => {
        try {
          this._init().catch(err => {
            throw new Error(err);
          });
        } catch (e) {
          throw new Error(e.message || e);
        }
      });
    }

    this._dirname = 'api';

    this.name = name;
    this.file = this.mockApiPath;
  }

  get mockApiPath() {
    return path.join(__dirname, '..', '..', 'mock-json-db', this._dirname, `${this.name}.json`);
  }

  async _init() {
    const isExist = await this._isExistsFile();

    if (!isExist) {
      const propName = this.propName || this.name;
      fs.writeFile(this.file, JSON.stringify({ [propName]: [] }), err => {
        if (err?.message.includes('directory')) {
          this._createFolder();
        }
      });
    }
  }

  _createFolder() {
    fs.mkdir(path.join(__dirname, '..', '..', 'mock-json-db', this._dirname), async err => {
      if (err) {
        throw new Error(`Не удалось создать папку: ${err}`);
      }

      await this._init();
    });
  }

  _isExistsFile() {
    return new Promise(resolve => {
      fs.access(this.file, err => {
        if (err?.message.includes('no such file')) {
          resolve(false);
        }

        resolve(true);
      });
    });
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

  throwError(err) {
    if (err) {
      throw err;
    }
  }
};
