'use strict';
// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async findUserList() {
    return this.ctx.model.Article.find();
  }
  async addUserList(post) {
    return this.ctx.model.Article.create(post);
  }
  // 待修改
  async updateUserList(id, item) {
    return this.ctx.model.Article.update(id, item);
  }
  async deleteUserList(id) {
    return this.ctx.model.Article.remove(id);
  }

}
module.exports = UserService;