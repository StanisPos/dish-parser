const fs = require('fs');
const path = require('path');
const { orderBy } = require('lodash');

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
    } else {
      try {
        this.data = await this.readFile();
      } catch (e) {
        throw new Error(e);
      }
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

  _updateData() {
    this.writeFile(this.data);
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

  sortListByType(direction, type) {
    if (!direction || !type) {
      throw new Error(`Не удалось произвести сортировку ${this.name}, ошибка направления и типа`);
    }

    const prop = this.propName || this.name;

    this.data[prop] = orderBy(this.data[prop], [type], [direction]);

    this._updateData();

    return this.data[prop];
  }

  updateItem(itemId, item) {
    const prop = this.propName || this.name;

    const index = this.data[prop].findIndex(({ id }) => Number(itemId) === Number(id));

    if (index < 0) {
      throw new Error('Не удалось обновить элемент');
    }

    this.data[prop].splice(index, 1, item);

    this._updateData();

    return this.data;
  }

  throwError(err) {
    if (err) {
      throw err;
    }
  }
};
