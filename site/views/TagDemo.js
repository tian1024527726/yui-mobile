import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Tag, Title } from '@ui'

class TagDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Tag</Title>
        尺寸:<div style={{backgroundColor:'#e2d6f2',height:'50px',padding:'10px'}}>
          <Tag>Default</Tag>&nbsp;<Tag size='medium'>Medium</Tag>&nbsp;<Tag size='large'>Large</Tag><br/>
        </div>

        颜色: <Tag color='info'>Info</Tag>&nbsp; <Tag color='warning'>Warning</Tag>&nbsp; <Tag color='success'>Success</Tag>&nbsp;
        <Tag color='danger'>Danger</Tag><hr/>

        内部填充:  <Tag color='info' filled>Info</Tag>&nbsp;<Tag color='warning' filled>Info</Tag>&nbsp;
        <Tag color='success' filled>Success</Tag>&nbsp;<Tag color='danger' filled>Danger</Tag><hr/>

        其他:<div style={{backgroundColor:'#e2d6f2',padding:'10px'}}>
        <Tag shape='round'>Rounded</Tag><hr/>
        .tags配合is-centered或.is-right可以改变小标签的排列方向:
        <Tag.Group><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
        <Tag.Group type='center'><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
        <Tag.Group type='right'><Tag>标签1</Tag><Tag>标签2</Tag><Tag>标签3</Tag></Tag.Group>
          </div>
      </article>
    )
  }
}

export default TagDemo
