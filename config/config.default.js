/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1618910842108_9970';
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
     domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/todos',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
