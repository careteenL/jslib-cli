# [jslib-cli](https://github.com/careteenL/jslib-cli)
[![](https://img.shields.io/badge/Powered%20by-jslib%20cli-brightgreen.svg)](https://github.com/careteenL/jslib-cli)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/careteenL/jslib-cli/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/careteenL/jslib-cli.svg?branch=master)](https://travis-ci.org/careteenL/jslib-cli)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/jslib-cli)
[![NPM downloads](http://img.shields.io/npm/dm/jslib-cli.svg?style=flat-square)](http://www.npmtrends.com/jslib-cli)

[English Document](./README.en_US.md)

作为搭建JavaScript第三方库的脚手架。

## 功能

- 支持ES6及以上版本语法
- 支持`Tree Shaking`
- 支持输出多种模块（IIFE、AMD、CMD、UMD、ESM）规范格式，development（.js）与production（.min.js）版本
- 支持自定义`banner`
- 支持`eslint`
- 支持可持续构建`travis-ci`
- 提供`issue-template`
- 支持单元测试
- 支持一键替换仓库名及其依赖
- 提供本地开发时编写示例及本地浏览器预览效果
- 提供文档模板

## 快速使用

- clone or fork 本仓库
```shell
git clone https://github.com/careteenL/jslib-cli.git yourLibName
cd yourLibName
npm install
```

- 修改根目录`rename.js`中`newName`字段为所需名，然后运行下面脚本，一键替换
```shell
npm run rename
```

- 修改`package.json`中`author`、`repository`、`bugs`信息

然后可以愉快地开始开发自己的JS库 :)

- 在`doc/api.md`中编写详细使用文档

- 在`test/`下编写测试用例，尽可能覆盖该库所有功能

- 本地开发时编写示例打开本地浏览器预览效果
```shell
npm run example
```

- 单元测试
```shell
npm run test
```

- 打包生成生产代码
```shell
npm run build
```

删除`README.md`的**快速使用**

修改`package.json`、`README.md`、`CHANGELOG.md`版本号和修改日志，打tag并发布新版到`npm`
```shell
npm run release
```

## 兼容性

IE9+

## 使用文档

- [API](./doc/api.md)
- [对该库的源码解析](xxx)

## issue模板

- [Issue Template](./ISSUETEMPLATE.md)

## 贡献者及指南

clone仓库并引入依赖
```shell
git clone git@github.com:careteenL/jslib-cli.git
npm install
```
开始开发：）

...

编写详细使用文档介绍功能，可在本地查看`http://127.0.0.1:8880`
```shell
npm run doc
```
请编写单元测试覆盖所加功能
```shell
npm run test
```
启动本地服务器编写示例
```shell
npm run example
```
修改`package.json README.md CHANGELOG.md`版本号，再发布
```shell
npm run release
```

- [Contributors](https://github.com/careteenL/jslib-cli/graphs/contributors)

## 更新日志

- [Changelog](./CHANGELOG.md)

## 计划

- [Todo](./TODO.md)