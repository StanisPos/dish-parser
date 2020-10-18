const { Strategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const config = require('../config');
const { auth } = require('../../services/index');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt,
};

module.exports = passport => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const { id, role } = await auth.findExistUser(payload);

        if (id) {
          done(null, { id, role });
        } else {
          done(null, false);
        }
      } catch (e) {
        throw new Error(e);
      }
    }),
  );
};
