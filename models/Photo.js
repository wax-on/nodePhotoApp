// Photo Model

module.exports = (bookshelf) => {
  return bookshelf.model(
    "Photo",
    {
      tableName: "photos",
      album() {
        return this.belongsTo("Album");
      },
      user() {
        return this.belongsTo("User");
      },
    },
    {
      fetchById(id, fetchOptions = {}) {
        return new this({ id }).fetch(fetchOptions);
      },
    }
  );
};
