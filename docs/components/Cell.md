# 卡片 Cell

[demo页面](http://47.102.138.2/yui.mobile/#/cell)

### 引入

```js
import { Cell } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
<Cell type='primary' bordered style={{padding:'0 1.125rem 0 1.125rem'}} onClick={()=>{console.log(12)}} subTitle='查看更多' title='产品相关协议' hasArrow />
```

###### 带描述
```jsx
<Cell type='secondary' description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多' title='产品相关协议'/>
```

###### 带图标、描述
```jsx
import { Cell, Icon, Title, Label} from 'yzt-rui';

<Cell type='secondary' style={{paddingLeft:'1.125rem',paddingRight:'1.125rem'}} prefixIcon={<Icon size='m' color='link' type='universal' />} bordered description={description()}  hasArrow />

const description = () => {
  return (
    <div>
      <Title
        size='5'
      >
        平安银行储蓄卡(8878)
      </Title>
      <Label size='small'>
        单笔限额100万元，单日限额100万元
      </Label>
    </div>
  )
}
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| type | string | `primary` | `primary`, `secondary` | 类型 |
| prefixIcon | ReactNode | - | - | 前面显示的图标 |
| suffixIcon | ReactNode | - | - | 后面显示的图标 |
| title | string &#124; ReactNode | - | - | 左边标题 |
| subTitle | string &#124; ReactNode | - | - | 右边标题 |
| description | any | - | - | 描述 |
| hasArrow | boolean | false | - | 是否显示箭头 |
| bordered | boolean | false | - | 是否显示边框 |
| disabled | boolean | false | - | 禁止点击时阴影效果 |
| onClick | <code>() => void</code> | noop | | 点击后触发的回调函数,会默认增加点击的阴影效果 |






