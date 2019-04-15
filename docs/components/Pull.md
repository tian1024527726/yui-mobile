# 上拉加载下拉刷新 Pull

[demo页面](https://yyb323.com/yui.mobile/#/pull)

### 引入

```js
import { Pull } from 'yzt-rui';
```

### 代码演示

#### 下拉刷新

###### 基本
```jsx
<Pull
  ref={(node) => window.pull = node}
  canPullDown={true}
  finishPullDown={() => {
    return new Promise((resolve, reject) => {
      console.log('刷新中'); setTimeout(() => {
        if (this.isUnMounted) return false;
        this.setState({
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }, resolve)
      }, 1000)
    })
  }}
  pullContent={<div>1234</div>}
/>
```

#### 上拉加载

###### 基本
```jsx
 <Pull
  ref={(node) => window.pull = node}
  canPullUp={true}
  finishPullUp={() => {
    return new Promise((resolve, reject) => {
      console.log('加载更多中')
      setTimeout(() => {
        const data = [].concat(this.state.data,[1,1,1,1])
        console.log(data)
        if (this.isUnMounted) return false;
        this.setState({
          data: data
        }, resolve)
      }, 1000)
    })
  }}
  pullContent={<div>1234</div>}
/>
```

###### 自定义s
```jsx
import React from 'react';
import { Pull, Cell, List, Title } from '@ui';

class PullDemo extends React.Component {
  constructor(props) {
    super(props)
    this.isUnMounted = false;
    this.state = {
      data: [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,,1,1],
      noMoreData: false
    }
  }

  renderPullRefreshContent() {
    return (
      <List style={{ backgroundColor: '#fff' }}>
        {this.state.data.map((item, index) => {
          return (
            <List.Item key={index}
              renderItem={<Cell
                title={'产品合同'}
                hasArrow={true}
              />}
            />
          )
        })}
      </List>
    )
  }
  componentDidMount(){}
  componentWillUnmount() {
    this.isUnMounted = true;
  }

  render() {
    const { noMoreData } = this.state
    return (
      <div className='pullPage'>
        <div className='pullScroll'>
          <Pull
            ref={(node) => window.pull = node}
            canPullDown={true}
            canPullUp={true}
            containerHeight={'600px'}
            finishPullDown={() => {
              return new Promise((resolve, reject) => {
                console.log('刷新中'); setTimeout(() => {
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                  }, resolve)
                }, 1000)
              })
            }}
            finishPullUp={() => {
              return new Promise((resolve, reject) => {
                console.log('加载更多中')
                setTimeout(() => {
                  const data = [].concat(this.state.data,[1,1,1,1])
                  console.log(data)
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: data
                  }, resolve)
                }, 1000)
              })
            }}
            noMoreData={noMoreData}
            pullContent={this.renderPullRefreshContent()}
          />
        </div>
      </div>
    )
  }
}

ReactDom(<PullDemo/>,mountNode)

```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| className | string | | | 追加类名 |
| canPullDown | boolean | false |  | 是否允许下拉 |
| canPullUp | boolean | false |  | 是否允许上拉 |
| containerHeight | string | 父盒子高度 |  | 容器高度 |
| showScrollBar | boolean | false | | 是否展示右边的滚动条 |
| preventClick | boolean | true | | 是否阻止click事件 |
| preventTap | boolean | true | | 是否阻止tap事件 |
| finishPullDown | func | | | 触发下拉刷新事件执行函数，需返回promise对象 |
| finishPullUp | func | | | 触发上拉加载事件执行函数，需返回promise对象 |
| noMoreData | boolean | false | | 是否没有更多数据 |
| bounceTime | number | 300 | | 设置滑动动画结束事件 |
| pullContent | ReactNode | | | 容器内容 |
| bottomMsg | string &#124; ReactNode | 没有更多记录 | | 内有更多内容时底部出现的描述文字 |
| pullingUpMsg | string &#124; ReactNode | 加载更多 | | 上拉加载时底部出现的描述文字 |


