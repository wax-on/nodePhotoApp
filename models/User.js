// Model User
const bcrypt = require("bcrypt");

module.exports = (bookshelf) => {
  return bookshelf.model(
    "User",
    {
      tableName: "users",
      photos() {
        return this.belongsToMany("Photo");
      },
      albums() {
        return this.belongsToMany("album");
      },
    },
    {
      hashSaltRounds: 10,

      fetchById(id, fetchOptions = {}) {
        return new this({ id }).fetch(fetchOptions);
      },

      async login(username, password) {
        // look if user exists in DB
        const user = await new this({ username }).fetch({ require: false });
        if (!user) {
          return false;
        }

        // checked if password is hashed from db
        const hash = user.get("password");
        /**
         * generate hash of cleartext password
          compare new hash with hash from db
          return user if hashes match, otherwise false
         */

        return (await bcrypt.compare(password, hash)) ? user : false;
      },
    }
  );
};
