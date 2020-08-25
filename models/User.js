// MODEL USER
const bcrypt = require("bcrypt");

module.exports = (bookshelf) => {
  return bookshelf.model(
    "User",
    {
      tableName: "users",
      albums() {
        return this.hasMany("Album");
      },
      photos() {
        return this.hasMany("Photos");
      },
    },
    {
      hashSaltRounds: 10,

      fetchById(id, fetchOptions = {}) {
        return new this({ id }).fetch(fetchOptions);
      },

      async login(email, password) {
        // Look if user exists in DB.
        const user = await new this({ email }).fetch({ require: false });
        if (!user) {
          return false;
        }

        // Checked if password is hashed from db.
        const hash = user.get("password");

        /**
        * Generate hash of cleartext password.
        Compare new hash with hash from db
        return user if hashes match, otherwise false. 
        */

        return (await bcrypt.compare(password, hash)) ? user : false;
      },
    }
  );
};
