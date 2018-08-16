import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Link, Label, Title } from '@ui'


class LinkDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Link</Title>
        尺寸: <Link size='large'>Size-large<Label> 1.125rem 基准 18px</Label></Link><hr/>
        <Link size='medium'>Size-medium<Label>1rem 基准 16px</Label></Link><hr/>
        <Link>Size-(Default)<Label>.875rem 基准 14px</Label></Link><hr/>
        <Link size='small'>Size-small<Label>.75rem 基准 12px</Label></Link><hr/>

        使用href:<Link href='http://www.baidu.com'>点击百度</Link>
      </article>
    )
  }
}

export default LinkDemo
