import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Toast, Button, Title } from '@ui'

class ToastDemo extends React.Component{
  constructor(props){
    super(props)
  }
  showNotice = () => {
    Toast.show(<div>登录超时，请稍后再试</div>,100,()=>{},true);
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Toast</Title>
        <Button onClick={this.showNotice}>显示toast</Button>
      </article>
    )
  }
}
export default ToastDemo




