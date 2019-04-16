# 轻提示 Toast

[demo页面](https://yyb323.com/yui.mobile/toast)

### 引入

```js
import { Toast } from 'yzt-rui';
```

### 代码演示

#### 单例模式
```js
// 开启
Toast.show('提示内容');
Toast.show('提示内容', 3000);
Toast.show('提示内容', 3000, () => { console.log('onClose') }, true);

// 关闭
Toast.hide();
```

### API

| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| show | func | | <code>(content:string | ReactNode, time:number, onClose: func, mask: bool)</code> | content内容, time显示时间, onClose隐藏时触发的函数, mask是否禁止点击屏幕 |
| hide | func | | | 隐藏toast |


