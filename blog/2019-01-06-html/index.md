---
path: '/2.html'
date: '2019-01-06'
title: '2018-html详细总结'
category: 'HTML'
---

## HTML(HyperText Markup Language)超文本标记语言
#### 一.头部

1. head	定义了文档的信息
2. title	定义了文档的标题
3. base	定义了页面链接标签的默认链接地址
4. link	定义了一个文档和外部资源之间的关系
5. meta	定义了HTML文档中的元数据
   ---
	为搜索引擎定义关键词:
	```html
	<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
	```
	---
	为网页定义描述内容:
	```html
	<meta name="description" content="Blog">
	```
	---
	定义网页作者:
	```html
	<meta name="author" content="PaigeWw">
	```
	---
	每30秒钟刷新当前页面:
	```html
	<meta http-equiv="refresh" content="30">
	```
	---
	viewport标记，用于指定用户是否可以缩放Web页面，并对相关的选项进行设定。
	```html
	 <meta name="viewport"
	 	   content="width=device-width,
	 	   initial-scale=1,
	 	   maximum-scale=1,
	 	   minimum-scale=1,
	 	   user-scalable=no,
	 	   minimal-ui">
	```
   width 和height 指令分别指定视区的逻辑宽度和高度。它们的值可以是以像素为单位的数字，也可以是一个特殊的标记符号。如上文代码中device-width即表示，视区宽度应为设备的屏幕宽度。类似的，device-height即表示设备的屏幕高度。

    user-scalable指定用户是否可以缩放视区，即缩放Web页面的视图。值为yes时允许用户进行缩放，值为no时不允许缩放。

    initial-scale用于设置Web页面的初始缩放比例。默认的初始缩放比例值因智能手机浏览器的不同而有所差异，通常情况下，设备会在浏览器中呈现出整个Web页面。设为1.0则显示未经缩放的Web页面。

    maximum-scale和minimum-scale用于设置用户对于Web页面缩放比例的限制。值的范围为0.25~10.0之间。

    所有智能手机浏览器都支持<meta name = "viewport" .......>标记的width和user-scalabel指令，但是Opera Mobile不使用user-scalable指令，而是主张用户应始终保留在移动浏览器中缩放Web页面的能力。

    ---
6.  script	定义了客户端的脚本文件
7.  style 定义了HTML文档的样式文件

