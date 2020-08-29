# 一个用 Vue 写的帅气的 UI 框架

作者：wbhchixigua

[![Build Status](https://travis-ci.org/wbh1328551759/gulu-vue.svg?branch=master)](https://travis-ci.org/wbh1328551759/gulu-vue)

## 介绍

这是我在学习 Vue 的过程中写的一个 UI 框架，希望对大家有所帮助。

## 开始使用

1、添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing: border-box;}
```
IE 15 及以上浏览器都支持次样式

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
  html {
     --button-height: 32px;
     --font-size: 14px;
     --button-active-bg: #eee;
     --button-bg: white;
     --border-radius: 4px;
     --color: #333;
     --border-color: #999;
     --border-color-hover: #666;
  }
```

2、安装 npm 包
```
npm i --save wbh-ui
```

3、引入
```
  import {Button, Icon} from 'wbh-ui'
  import 'wbh-ui/dist/index.css'

  export default {
    name: 'App',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
```

4、引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2027980_oqrdacvnqo.js"></script>
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

