# 标签 Tag

[demo页面](https://yyb323.com/yui.mobile/tag)

### 引入

```js
import { Tag } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 尺寸
```jsx
<Tag>Default</Tag>
<Tag size='medium'>Medium</Tag>
<Tag size='large'>Large</Tag>
```

###### 颜色
```jsx
<Tag color='info'>Info</Tag>
<Tag color='warning'>Warning</Tag>
<Tag color='success'>Success</Tag>
<Tag color='danger'>Danger</Tag>
```

###### 内部填充
```jsx
<Tag color='info' filled>Info</Tag>
<Tag color='warning' filled>Warning</Tag>
<Tag color='success' filled>Success</Tag>
<Tag color='danger' filled>Danger</Tag>
```

###### 形状
```jsx
<Tag shape='round'>Rounded</Tag>
```

###### 配合Tag.Group使用
```jsx
<Tag.Group><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
<Tag.Group type='center'><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
<Tag.Group type='right'><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
```

### API

#### Tag

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| size | string | `medium` | `small`, `medium`, `large`  | 尺寸 |
| color | string | - | `info`, `warning`, `danger`, `success`  | 颜色 |
| shape | string | - | `round`  | 形状 |
| filled | boolean | false | - | 是否填充 |

#### Tag.Group

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| type | string | `left` | `left`, `center`, `right` | tag的布局 |
