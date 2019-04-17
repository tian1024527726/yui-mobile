# 模态框 Modal

[demo页面](https://yyb323.com/yui.mobile/modal)

### 引入

```js
import { Modal } from 'yzt-rui';
```

### 代码演示

#### 基本用法

###### 普通
```jsx
<Modal
  visible={this.state.showStatus}
  popup
  mask={false}
  animationType='slide-up'
  onClose={() => { this.setState({ showStatus: false }) }}
>
  <div style={{ width: '100%', height: '10rem', backgroundColor: '#fff' }}>
    Hello World!!!!!下方弹出
  </div>
</Modal>
```

#### 特定场景

###### 警告框
```jsx
<Alert
  visible={this.state.ZoomInDemo}
  footer={[{ text: '关闭',  onPress: () => { this.setState({ ZoomInDemo: false }) } }, { text: '拨打咨询电话', onPress: () => { alert('拨打电话') } }]}
>
  <div>
    抱歉，被保险人的健康状况不符合该产品投保的要求，如需购买相关保障请拨打咨询电话 95511-4-4。
  </div>
</Alert>

<Alert
  visible={this.state.FadeInDemo}
  transitionName='ym-fade'
  footer={[{ text: '关闭', onPress: () => { this.setState({ FadeInDemo: false }) } }, { text: '拨打咨询电话', onPress: () => { alert('拨打电话') } }]}
>
  <div>
    抱歉，被保险人的健康状况不符合该产品投保的要求，如需购买相关保障请拨打咨询电话 95511-4-4。
  </div>
</Alert>

<Alert
  visible={this.state.ZoomInDemo}
  footer={[{ text: '知道了', onPress: () => { this.setState({ ZoomInDemo: false }) } }]}
>
  <div>
    社保指的是海亿账通互联网科技有限公司运作的金融亿超市作为交易服务平台进行信息发布，不对任何投资人及/或任何交易提供任何担保。
  </div>
</Alert>

<Alert
  transitionName='ym-fade'
  visible={this.state.FadeInDemo}
  footer={[{ text: '知道了', onPress: () => { this.setState({ FadeInDemo: false }) } }]}
>
  <div>
    社保指的是海亿账通互联网科技有限公司运作的金融亿超市作为交易服务平台进行信息发布，不对任何投资人及/或任何交易提供任何担保。
  </div>
</Alert>

```



### Modal API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | ym-modal | | 类名前缀 |
| className | string | 无 | | 追加类名 |
| visible | bool | false | | 是否显示 |
| style | object | | | 样式 |
| wrapClassName | string | 无 | | 追加内容容器类名 |
| transitionName | string | `ym-zoom`, `ym-fade`, `ym-slide-up`, `ym-slide-down` | | 1、快速显示2、渐隐渐现3、底部弹出4、顶部弹出 |
| maskTransitionName | string | 无 | | 遮罩层显示隐藏动画类名 |
| mask | func | true | | 是否显示遮罩层 |
| animated | func | true | | 是否有动画 |
| transparent | bool | false | | 默认全屏高度/true时内容自适应渐隐渐现弹框 |
| popup | bool | false | | 底部和定部弹框模式，默认底部弹起 |
| animationType | string | `slide-up`, `slide-down` | `slide-up` | popup模式，默认是底部弹起 |
| operation | bool | false |  | 设置footer的布局，true时是上下布局，false时左右布局 |
| title | any |  |  | 弹框头部内容 |
| footer | array | {text: string &#124; ReactNode , onPress: func} | | 弹框底部内容 |


### Alert模式 API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| visible | bool | false | | 是否显示 |
| style | object | | | 样式 |
| title | any | | | 弹框头部内容 |
| footer | array | {text: string &#124; ReactNode , onPress: func} | | 弹框底部内容 |
| transitionName | string | `ym-zoom`, `ym-fade` | | 1、快速显示2、渐隐渐现 |





