import React from 'react';
import Header from '@site/layouts/AppHeader'
import Subtitle from '@site/layouts/Subtitle'
import { Tabs, Label, Title } from '@ui';
const TabPane = Tabs.Pane;

const ContentWrapper = ({ children }) => {
  return <div style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{children}</div>
}


class TabDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeKey: '2'
    }
  }
  render() {
    const { activeKey } = this.state;
    return (
      <article>
        <Header></Header>
        <Title>Tabs</Title>
        <Subtitle>normal类型:</Subtitle>
        <Tabs onChange={(k) => { console.log(k) }}>
          <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
        </Tabs>
        <Subtitle>filled类型:</Subtitle>
        <Tabs onChange={(k) => { console.log(k) }} type='filled'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
            <ContentWrapper>content3</ContentWrapper>
          </TabPane>
        </Tabs><br />
        <Tabs onChange={(k) => { console.log(k) }} type='filled'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
        </Tabs>
        <Subtitle>underline类型:</Subtitle>
        <Tabs onChange={(k) => { console.log(k) }} type='underline'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
        </Tabs><br />
        <Tabs onChange={(k) => { console.log(k) }} type='underline' defaultActiveKey='3'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>全面款</Label></div>} key='3'>
            <ContentWrapper>content3</ContentWrapper>
          </TabPane>
        </Tabs>
        <Subtitle>activeColor:种类</Subtitle>
        <Tabs onChange={(k) => { console.log(k) }} activeColor='yellow'>
          <TabPane tab={<div><Label nodeType='p' size='small'>七日年化收益率</Label><Label nodeType='p' size='small'>4.0290%</Label></div>} key='1'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='small'>万分收益</Label><Label nodeType='p' size='small'>1.0581元</Label></div>} key='2'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
        </Tabs><br />
        <Tabs onChange={(k) => { this.setState({ activeKey: k }) }} type='filled' activeColor='yellow' activeKey={activeKey}>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='1'>
            <ContentWrapper>受控的tabs1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='2'>
            <ContentWrapper>受控的tabs2</ContentWrapper>
          </TabPane>
        </Tabs><br />
        <Tabs onChange={(k) => { console.log(k) }} type='underline' activeColor='yellow'>
          <TabPane tab={<div><Label nodeType='p' size='medium'>基础款</Label></div>} key='2'>
            <ContentWrapper>content1</ContentWrapper>
          </TabPane>
          <TabPane tab={<div><Label nodeType='p' size='medium'>热销款</Label></div>} key='1'>
            <ContentWrapper>content2</ContentWrapper>
          </TabPane>
        </Tabs><br />
      </article>
    )
  }
}

export default TabDemo
