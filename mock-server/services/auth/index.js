const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const { isEmpty } = require('lodash');
const config = require('../../configs/config');

const Abstract = require('../abstract/index');

class Auth extends Abstract {
  constructor(name) {
    super(name);

    this.data = {};
    this.file = this.getMockApiPath();
  }

  set _updateUsers(user) {
    try {
      this.data.users.push(user);
    } catch (e) {
      throw new Error(`Не удалось добавить пользователя: ${e}`);
    }
  }

  _createJwt(user) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        config.jwt,
        { expiresIn: '7d' },
        (err, token) => {
          if (err) {
            reject(err);
          }

          resolve(token);
        },
      );
    });
  }

  async findExistUser({ id = '', phone = '', email = '' } = {}) {
    try {
      this.data = await this.readFile();

      return this.data.users?.find(
        user => (user.id === id || user.phone === phone || user.email === email) && user,
      );
    } catch (e) {
      this.throwError(e);
      return false;
    }
  }

  _checkPassword({ password, email, phone }) {
    return new Promise(resolve => {
      bcrypt.compare(password, email || phone).then(resolve);
    });
  }

  async _addNewUser({ id = uniqid(), phone = '', email = '', role = 'user', password }) {
    this._updateUsers = { id, phone, email, role, password };

    try {
      await this.writeFile(this.data);
      return await this._createJwt({ id, role });
    } catch (e) {
      return `Не удалось записать пользователя: ${e.message || e}`;
    }
  }

  async createNewUser(user) {
    if (isEmpty(user)) {
      throw new Error('Не верные данные');
    }
    const existUser = await this.findExistUser(user);

    if (existUser) {
      throw new Error('Такой пользователь существует');
    }

    return this._addNewUser(user);
  }

  async authentication(loginData) {
    if (!loginData) {
      throw new Error('Нет такого и быть не может');
    }

    const foundUser = await this.findExistUser(loginData);

    const isCheckPassword = await this._checkPassword(foundUser);

    if (!isCheckPassword) {
      throw new Error('Такого пользователя не существует');
    }

    return await this._createJwt(foundUser);
  }
}

module.exports = new Auth('auth');
