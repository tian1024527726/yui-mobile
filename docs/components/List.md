# 列表 List

[demo页面](https://yyb323.com/yui.mobile/#/list)

### 引入

```js
import { List } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
import { List, Cell, Input } from 'yzt-rui'

<List
  header='hello'
  bodyClassName=''
>
  <List.Item
    renderItem={<Cell
    title={'产品相关协议'}
    hasArrow={true}/>}
  />
  <List.Item
    renderItem={<Cell
    title={'常见问题'}
    hasArrow={true}/>}
  />
  <List.Item
    renderItem={<Cell
    title={'买入规则'}
    type='secondary'
    description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多'/>}
  />
  <List.Item
    renderItem={<Input addonBefore='姓名' value='啦啦啦' readOnly></Input>}
  >11212</List.Item>
```

### API

#### List

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| bodyClassName | string | - | - | 追加主体内容容器类名 |
| header | any | - | - | 头部内容 |



#### List.Item

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| renderItem | ReactNode | - | - | 内容 |
| disabled | boolean | false | - | 禁止点击时阴影效果 |
| onClick | <code>() => void</code> | noop | | 点击后触发的回调函数,会默认增加点击的阴影效果 |

