import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Cell, Icon, Title, Label } from '@ui'

class CellDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article style={{backgroundColor:'#FFF'}}>
        <Header></Header>
        <Title>Cell</Title>
        primary类型的cell(没有border):<Cell type='primary' bordered style={{padding:'0 1.125rem 0 1.125rem'}} onClick={()=>{console.log(12)}} subTitle='查看更多' title='产品相关协议' hasArrow /><br/>
        secondary类型的cell(没有border):<Cell type='secondary' description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多' title='产品相关协议'/><br/>
        primary类型的cell(有border):<Cell type='primary' bordered onClick={()=>{console.log(12)}} subTitle='查看更多' title='产品相关协议' hasArrow /><br/>
        secondary类型的cell(有border):<Cell type='secondary' bordered description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多' title='产品相关协议'/><br/>
        primary类型的cell(有border):<Cell type='secondary' style={{paddingLeft:'1.125rem',paddingRight:'1.125rem'}} prefixIcon={<Icon size='m' color='link' type='universal' />} bordered description={description()}  hasArrow />
      </article>
    )
  }
}

const description = () => {
  return (
    <div>
      <Title
        size='5'
      >
        平安银行储蓄卡(8878)
      </Title>
      <Label size='small'>
        单笔限额100万元，单日限额100万元
      </Label>
    </div>
  )
}

export default CellDemo
