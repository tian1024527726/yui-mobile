import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Icon, Title } from '@ui'

class IconDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Icon</Title>
        <Icon type='arrow-right'></Icon><br/>
        <Icon type='warning'></Icon><br/>
        <Icon type='clear'></Icon><br/>
        <Icon type='claim'></Icon><br/>
        <Icon size='m' type='keyboard-close'></Icon><br/>
        <Icon type='keyboard-close'></Icon><br/>
        <Icon size='s' type='keyboard-close'></Icon>
      </article>
    )
  }
}

export default IconDemo
