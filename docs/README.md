# YZT RUI

  金融壹账通移动端UI组件库，基于React。

### Example 案例

[Online example](http://47.102.138.2/yui.mobile/)

### Install 安装

```bash
yarn install yzt-rui --save
```

### Import 引入

* 全组件引入

```js
import { Button, Cell } from 'yzt-rui';
import 'yzt-rui/components/style/index.scss';
```

* 单独引入js,css无法单独引入

```js
import Button from 'yzt-rui/lib/Button';
import 'yzt-rui/components/style/index.scss';
```

### Usage 使用

```js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Button type="primary">按钮</Button>, document.getElementById('app'));
```

> 注：使用以上方法需要支持jsx语法或者经过编译

### Custom Theme 自定义主题
```js
import { Button, Cell } from 'yzt-rui';
import './styles/index.scss';
```

`./style/index.scss` 文件内容如下：

```css
@import "./variables";
@import "~yzt-rui/components/style/index.scss";
```

通过自己的variables.scss文件重写sass变量。

### Document 文档
[中文](https://github.com/tian1024527726/yui-mobile)

### Changelog 更新日志
[CHANGELOG.md](https://github.com/tian1024527726/yui-mobile)

### License
MIT

