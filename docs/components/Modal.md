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
<Modal visible={this.state.visible}>
  <Modal.Header title="标题" onClose={() => this.setState({ visible: false })} />
  <Modal.Body>
    模态框内容
  </Modal.Body>
</Modal>
```

###### 动画效果
```jsx
<Modal visible={this.state.visible} animationType="rotate" onMaskClick={() => this.setState({ visible: false })}>
  <Modal.Body>
    模态框内容
  </Modal.Body>
</Modal>
```

#### 特定场景

###### 警告框
```jsx
<Alert
  shape="radius"
  visible={this.state.visible}
  title="警告"
  message="这里是警告信息"
  onCancel={() => this.setState({ visible: false })}
  />
```

###### 确认框
```jsx
<Confirm
  shape="radius"
  visible={this.state.visible}
  title="确认信息"
  message="你确定要这样做吗？"
  onOk={() => alert(`click ok`)}
  onCancel={() => this.setState({ visible: false })}
  />
```


### Modal API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| prefixCls | string | ym-modal | | 类名前缀 |
| className | string | 无 | | 追加类名 |
| visible | bool | false | | 是否显示 |
| wrapClassName | string | 无 | | 追加内容容器类名 |
| transitionName | string | 无 | | 弹出框显示隐藏动画类名 |
| maskTransitionName | string | 无 | | 遮罩层显示隐藏动画类名 |
| mask | func | true | | 是否显示遮罩层 |
| animated | func | true | | 是否有动画 |
| transparent | bool | false | | 默认全屏高度/true时内容自适应渐隐渐现弹框 |
| popup | bool | false | | 底部和定部弹框模式，默认底部弹起 |
| animationType | string | `slide-up`, `slide-down` | `slide-up` | popup模式，默认是底部弹起 |
| operation | bool | false |  | 设置footer的布局，true时是上下布局，false时左右布局 |
| title | any |  |  | 弹框头部内容 |
| footer | array | {text: string | ReactNode , onPress: func} |  | 弹框底部内容 |


### Alert模式 API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |




