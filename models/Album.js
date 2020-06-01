// Album Model

module.exports = (bookshelf) => {
  return bookshelf.model(
    "Album",
    {
      tableName: "albums",
      user() {
        return this.belongsTo("User");
      },
      photo() {
        return this.belongsToMany("Photo");
      },
    },
    {
      fetchById(id, fetchOptions = {}) {
        return new this({ id }).fetch(fetchOptions);
      },
    }
  );
};
