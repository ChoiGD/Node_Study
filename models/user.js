class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {}

  static findById(userId) {}
}

module.exports = User;
