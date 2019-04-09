# 按钮 Button

[demo页面](https://yyb323.com/yui.mobile/#/button)

### 引入

```js
import { Button } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
<Button href='http://www.baidu.com'>返回</Button>
<Button>确认</Button>
```

###### 尺寸
```jsx
<Button size='small'>小尺寸</Button>
<Button size='default'>默认尺寸</Button>
<Button.Group style={{width:'100%'}}>
  <Button size='fullwidth'>底部全宽度按钮</Button>
</Button.Group>
```

###### 颜色
```jsx
<Button.Group style={{width:'45%'}}>
  <Button type='primary' size='fullwidth'>主要操作normal</Button>
</Button.Group>
<Button.Group style={{width:'45%'}}>
  <Button type='secondary' size='fullwidth'>次要操作normal</Button>
</Button.Group>
```

#### 不同状态
```jsx
<Button.Group style={{width:'45%'}}>
  <Button type='primary' state='active' size='fullwidth'>主要操作active</Button>
</Button.Group>
<Button.Group style={{width:'45%'}}>
  <Button type='secondary' state='active' size='fullwidth'>次要操作active</Button>
</Button.Group>
主要操作loading
<Button.Group style={{width:'45%'}}>
  <Button type='primary' size='fullwidth' loading></Button>
</Button.Group>
次要操作loading
<Button.Group style={{width:'45%'}}>
  <Button type='secondary' size='fullwidth' loading></Button>
</Button.Group>
<Button.Group style={{width:'45%'}}>
  <Button type='primary' size='fullwidth' disabled>主要操作disable</Button>
</Button.Group>
<Button.Group style={{width:'45%'}}>
  <Button type='primary' size='fullwidth' disabled>次要操作disable</Button>
</Button.Group>
```

#### 倒计时按钮
```jsx
import React from 'react'
import { Button } from 'yzt-rui'

class ButtonDemo extends React.Component {
  constructor(props){
    super(props)
    let timer, countDown = '提交';
    this.state = {
      countDown: countDown,
      disabled: false
    }
  }
  handleClick = () => {
    this.setState({
      countDown: 5,
      disabled: true
    })
    this.timer = setInterval(()=>{
      if(this.state.countDown == 1){
        this.setState({
          countDown: '提交',
          disabled: false
        })
        clearInterval(this.timer)
      }else {
        this.setState({
          countDown: --this.state.countDown
        })
      }
    },1000)
  }
  render(){
    return (
      <Button.Group style={{width:'45%'}}>
        <Button type='primary' disabled={this.state.disabled} size='fullwidth' onClick={this.handleClick}>{this.state.countDown}</Button>
      </Button.Group>
    )
  }
}

ReactDOM.render(<ButtonDemo />, mountNode);
```


### API

#### Button

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |
| type | string | - | `primary`, `secdonary` | 设置按钮类型 |
| state | string | - | `hovered`, `active`, `focused` | 按钮状态 |
| size | string | `small`, `default`, `fullwidth` | `default` | 设置按钮大小 |
| onClick | <code>(e?: any) => void</code> | noop | - | 点击后触发的回调函数 |
| disabled | boolean | false | | 是否禁止点击 |
| icon | ReactNode | - | - | icon |
| loading | boolean | false | - | 设置按钮载入状态 |
| timeOut | number | 500ms | - | 两次点击之间的时间间隔 |


#### Button.Group
##### 用于作为多个Button的容器

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | - | - | 追加类名 |

