// Album model

module.exports = (bookshelf) => {
  return bookshelf.model(
    "Album",
    {
      tableName: "albums",
      users() {
        return this.belongsTo("User");
      },
      photos() {
        return this.belongsTo("Photo");
      },
      albums() {
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
