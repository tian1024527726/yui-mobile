import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Title,Label } from '@ui'

class TitleDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Title</Title>
        尺寸: <Title size='1'>Size-1<Label>3rem 基准 48px</Label></Title>
        <Title size='2'>Size-2<Label>2.375rem 基准 38px</Label></Title>
        <Title size='3'>Size-3 (Default)<Label>1.5rem 基准 24px</Label></Title>
        <Title size='4'>Size-4<Label>1.125rem 基准 18px</Label></Title>
        <Title size='5'>Size-5<Label>1rem 基准 16px</Label></Title>
        <Title size='6'>Size-6<Label>0.875rem 基准 14px</Label></Title>
        <Title size='7'>Size-6<Label>0.75rem 基准 14px</Label></Title>

        颜色:<div style={{backgroundColor:'#e2d6f2',padding:'10px'}}>
          <Title color='white'>短期意外伤害保险</Title>
          <Title color='white' size='4'>全面满足短期工作保障需求</Title><hr/>
          <Title color='black'>短期意外伤害保险</Title>
          <Title color='black' size='4'>全面满足短期工作保障需求</Title>
          </div>
      </article>
    )
  }
}
export default TitleDemo

