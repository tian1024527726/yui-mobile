import React from 'react'
import Header from '@site/layouts/AppHeader'
import { List, Cell, Input, Title } from '@ui'
const ListItem = List.Item;

const itemList = () => {
  return [

    <Cell
      title={'常见问题'}
      hasArrow={true}
    />,
    <Cell
      title={'买入规则'}
      type='secondary'
      description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多'
    />,
    <Input addonBefore='姓名' defaultValue='啦啦啦'></Input>
  ]
}

class ListDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>List</Title>
        List 配合 Cell一起使用:
        <List
          header='hello'
          bodyClassName='body'
        >
          <ListItem
            renderItem={<Cell
            title={'产品相关协议'}
            hasArrow={true}/>}
          />
          <ListItem
            renderItem={<Cell
            title={'常见问题'}
            hasArrow={true}/>}
          />
          <ListItem
            renderItem={<Cell
            title={'买入规则'}
            type='secondary'
            description='查看更多查看更多查看更多查看更多查看更多查看更多查看更多查看更多'/>}
          />
          <ListItem
            renderItem={<Input addonBefore='姓名' value='啦啦啦' readOnly></Input>}
          >11212</ListItem>
        </List>
      </article>
    )
  }
}

export default ListDemo
