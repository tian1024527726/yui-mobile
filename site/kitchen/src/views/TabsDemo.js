import React from 'react';
import Header from '@site/layouts/AppHeader'
import AppTable from '@site/layouts/AppTable'
import { Tabs, Label, Title } from '@ui';
const TabPane = Tabs.Pane;

const apiData = [
  ['activekey','当前激活 tab 面板的 key',3,4]
]

class TabDemo extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      activeKey: '2'
    }
  }
  render(){
    const { activeKey } = this.state;
    return (
      <article>
        <Header></Header>
        <Title>API</Title>
        <AppTable
          data={apiData}
        />
        <Title>Tabs</Title>
        <Tabs onChange={(k)=>{console.log(k)}}>
          <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
            content2
          </TabPane>
        </Tabs>
        filled类型:<br/>
        <Tabs onChange={(k)=>{console.log(k)}} type='filled'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            content2
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
            content3
          </TabPane>
        </Tabs><br/>
        <Tabs onChange={(k)=>{console.log(k)}} type='filled'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            content2
          </TabPane>
        </Tabs>
        underline类型:<br/>
        <Tabs onChange={(k)=>{console.log(k)}} type='underline'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            content2
          </TabPane>
        </Tabs><br/>
        <Tabs onChange={(k)=>{console.log(k)}} type='underline' defaultActiveKey='3'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            content2
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
            content3
          </TabPane>
        </Tabs><br/>
        activeColor:种类
        <Tabs onChange={(k)=>{console.log(k)}} activeColor='yellow'>
          <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
            content2
          </TabPane>
        </Tabs>
        <Tabs onChange={(k)=>{this.setState({activeKey: k})}} type='filled' activeColor='yellow' activeKey={activeKey}>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            受控的tabs1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            受控的tabs2
          </TabPane>
        </Tabs>
        <Tabs onChange={(k)=>{console.log(k)}} type='underline' activeColor='yellow'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            content1
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            content2
          </TabPane>
        </Tabs><br/>
      </article>
    )
  }
}

export default TabDemo
