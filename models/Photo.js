// Model Photo
module.exports = (bookshelf) => {
  return bookshelf.model(
    "Photo",
    {
      tableName: "photos",
      album() {
        return this.belongsTo("Album");
      },
      users() {
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
