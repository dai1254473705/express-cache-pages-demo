/*!
 * init cache pages
 */
'use strict';

const cachePages = require('./cache-pages');
const path = require('path');

const cachePagesInit = cachePages({
    safeMode: false,// 安全模式，一旦开启，不管缓存是否失效，都将走缓存机制
    global: true,// 是否全局开始缓存，静态化全局开关
    sos: 'http://www.netyali.cn/?from=express-cache-pages',// 出现大范围攻击或者瘫痪后使用了缓存的路由将跳转到指定链接（redirect）503
    path: path.join(__dirname, 'express_cache_pages'), // 保存缓存的目录
	cookiesBlackList: ['_uid'],// 黑名单，包含其中cookie的将不读取
    term: 5000,// 失效时间，如果设置0，永远不失效
    validTimeStamp: 0,// 开始生效的时间
    minLength: 100,// html最短长度
    mode: 'greedy'
});

/**
 * Module exports
 */
module.exports = cachePagesInit;
