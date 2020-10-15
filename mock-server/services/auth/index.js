const jwt = require('jsonwebtoken');
const Abstract = require('../abstract/index');

class Auth extends Abstract {
  constructor(name) {
    super(name);

    this.data = {};
    this.file = this.getMockApiPath();
  }

  set _updateUsers(user) {
    this.data.users.push(user);
  }

  async _findExistUser({ phone = '', email = '' } = {}) {
    try {
      this.data = await this.readFile();

      return this.data.users?.find(user => (user.phone === phone || user.email === email) && user);
    } catch (e) {
      this.throwError(e);
      return false;
    }
  }

  async _addNewUser({ username, email, role = 'user', password } = {}) {
    this._updateUsers = { username, email, role, password };

    try {
      await this.writeFile(this.data);
      return 'Пользователь записан';
    } catch (e) {
      return 'Не удалось записать пользователя';
    }
  }

  async createNewUser(user) {
    const existUser = await this._findExistUser(user);

    if (existUser) {
      throw new Error('Такой пользователь существует');
    }

    return this._addNewUser(user);
  }

  async authentication(loginData) {
    if (!loginData) {
      throw new Error('Нет такого и быть не может');
    }

    const foundUser = await this._findExistUser(loginData);

    return new Promise((resolve, reject) => {
      if (!foundUser) {
        reject(new Error('Пользователь не найден'));
      }

      jwt.sign(foundUser, foundUser.role, (err, token) => {
        if (err) {
          reject(err);
        }

        resolve(token);
      });
    });
  }
}

module.exports = new Auth('auth');
