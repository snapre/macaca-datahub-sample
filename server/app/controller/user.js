'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUserByUsername() {
    const { ctx } = this;

    // ...

    ctx.body = {
      success: true,
      data: {
        username: 'snapre',
        email: 'snapre@gmail.com',
        name: 'XiaoRui',
        mobile: '150xxxx4561',
      },
      type: 'egg server return data',
    };
  }

  async createUser() {
    const { ctx } = this;

    console.log(ctx.request.body);

    // ...

    ctx.body = {
      success: true,
      data: {
        ...ctx.request.body,
      },
      type: 'egg server return data',
    };
  }
}

module.exports = UserController;
