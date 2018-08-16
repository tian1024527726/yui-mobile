import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Label, Title } from '@ui'

class LabelDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Label</Title>
        尺寸:<Label size='large'>Large font-size=1.125rem 基准 18px</Label><hr/>
        <Label size='medium'>Medium font-size=1.125rem 基准 16px</Label><hr/>
        <Label>Normal (Default) font-size=0.875rem 基准 14px</Label><hr/>
        <Label size='small'>Small font-size=0.75rem 基准 14px</Label><hr/>

        颜色:<div style={{backgroundColor:'#e2d6f2',padding:'10px'}}>
          <Label>Default</Label>&nbsp;<Label color='white'>White</Label>&nbsp;<Label color='black'>Black</Label>&nbsp;
          <Label color='light'>Light</Label>&nbsp;<Label color='dark'>Dark</Label>&nbsp;<Label color='primary'>Primay</Label>&nbsp;
          <Label color='info'>Info</Label>&nbsp;<Label color='link'>Link</Label>&nbsp;<Label color='warning'>Warning</Label>&nbsp;
        <Label color='danger'>Danger</Label>&nbsp;<Label color='success'>Success</Label>&nbsp;<Label color='grey'>Grey</Label>&nbsp;<Label color='grey-darker'>Grey-darker</Label>&nbsp;<Label color='grey-dark'>Grey-dark</Label>&nbsp;<Label color='black-bis'>Black-bis</Label>&nbsp;<Label color='black-ter'>Black-ter</Label>&nbsp;<Label color='white-ter'>White-ter</Label>&nbsp;<Label color='white-bis'>White-bis</Label>&nbsp;<Label color='grey-light'>Grey-light</Label>&nbsp;<Label color='grey-lighter'>Grey-lighter</Label>
        </div><br/>
        其他:<Label>点击<a href='http://www.baidu.com'>主页</a>返回</Label>&nbsp;
      </article>
    )
  }
}

export default LabelDemo
