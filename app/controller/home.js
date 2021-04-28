'use strict';

module.exports = app => {



  return class HomeController extends app.Controller {
    async index() {
      const { ctx } = this;
      ctx.body = 'hi, egg';
    }
    async getDB() {
      const { ctx } = this;
      ctx.body = await ctx.service.user.findUserList();
    }
    async addDB() {
      const { ctx } = this;
      const request = ctx.request.body;
      ctx.body = await ctx.service.user.addUserList(request);
    }

    async updateDB() {

      const { ctx } = this;
      const id = ctx.params;
      const request = ctx.request.body;      
      ctx.body = await ctx.service.user.updateUserList(id, request);
    }
    async removeDB() {
      const { ctx } = this;
      const id = ctx.params;
      const request = ctx.request.body;    
      this.ctx.body = await this.ctx.service.user.deleteUserList(id);
    }

  };
};

