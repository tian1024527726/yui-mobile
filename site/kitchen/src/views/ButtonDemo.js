import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Button, Title } from '@ui'

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
      <article>
        <Header></Header>
        <Title>Button</Title>
        适用：<Button href='http://www.baidu.com'>返回</Button>&nbsp;
        <Button>确认</Button>&nbsp;<hr/>

        尺寸:<Button size='small'>小尺寸</Button>&nbsp;
        <Button size='default'>默认尺寸</Button><hr/>
        <Button.Group style={{width:'100%'}}><Button size='fullwidth' timeOut={4000} onClick={()=>{console.log(12)}}>底部全宽度按钮</Button></Button.Group><hr/>

        颜色:<Button.Group style={{width:'45%'}}><Button type='primary' size='fullwidth'>主要操作normal</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='secondary' size='fullwidth'>次要操作normal</Button></Button.Group><hr/>

        不同状态:<Button.Group style={{width:'45%'}}><Button type='primary' state='active' size='fullwidth'>主要操作active</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='secondary' state='active' size='fullwidth'>次要操作active</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='primary' size='fullwidth' loading>次要操作active</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='secondary' size='fullwidth' loading>次要操作active</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='secondary' size='fullwidth' loading>次要操作active</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='primary' size='fullwidth' disabled>主要操作disable</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='primary' size='fullwidth' disabled>主要操作disable</Button></Button.Group><br/>
        <Button.Group style={{width:'45%'}}><Button type='secondary' size='fullwidth' disabled>次要操作disable</Button></Button.Group>

        倒计时按钮:<Button.Group style={{width:'45%'}}><Button type='primary' disabled={this.state.disabled} size='fullwidth' onClick={this.handleClick}>{this.state.countDown}</Button></Button.Group><br/>
      </article>
    )
  }
}

export default ButtonDemo
