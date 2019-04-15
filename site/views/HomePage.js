import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Label, List, Cell } from '@ui'
const ListItem = List.Item;
const NavLink = (props) => {
  return (
    <Link to={`/yui.mobile/${props.to}`} style={{paddingLeft:'1rem',position:'absolute',top:'0',left:'0',width:'100%',height:'100%',lineHeight:'2.5rem',color:'#7a7a7a',fontSize:'.875rem'}}>
    {props.children}
    </Link>
  )
}

class HomePage extends React.Component{
  constructor(){
    super()
  }
  renderDivide() {
    const dividerStyle = {
      width: '100%',
      height: '.625rem',
      backgroundColor: '#F5F5F5'
    }
    return (
      <div style={dividerStyle}></div>
    )
  }
  render(){
    const browserHistory = this.props.history;
    return (
      <div id='app-container'>
        <Title size='3'>Yzt Rui</Title>
        <Label size='small' nodeType='p' to='grey-darker'  style={{paddingBottom:'1rem'}}>壹账通金融产品基础组件</Label>
        {/* 导航 Navigation */}
        <List style={{border:0}} >
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            title={'导航 Navigation'}/>}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='tabs'>Tabs 标签页</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
        </List>
        {this.renderDivide()}
        {/* 数据录入 Data Entry */}
        <List style={{border:0}} >
          <ListItem
            style={{border:0}}
            renderItem={<Cell
            title={'数据录入 Data Entry'}/>}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='button'>Button 按钮</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='input'>Input 输入框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='radio'>Radio 单选框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='keyboard'>Keyboard 数据键盘</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='checkbox'>Checkbox 复选框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='switch'>Switch 滑动开关</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
        </List>
        {this.renderDivide()}
        {/* 数据展示 Data Display */}
        <List style={{border:0}} >
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            title={'数据展示 Data Display'}/>}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='title'>Title 标题</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='icon'>Icon 图标</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='tag'>Tag 标签</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='label'>Label 文本</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='cell'>Cell 卡片</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='list'>List 列表</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='link'>Link 链接</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='timeaxis'>TimeAxis 时间轴</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
        </List>
        {this.renderDivide()}
        {/* 手势 Gesture */}
        <List style={{border:0}} >
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            title={'手势 Gesture'}/>}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='pull'>Pull 拉动刷新</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='picker'>Picker 选择器</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
        </List>
        {this.renderDivide()}
        {/* 操作反馈 Feedback */}
        <List style={{border:0}} >
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            title={'操作反馈 Feedback'}/>}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='popup'>Popup 弹出框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='modal'>Modal 弹出框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
          <ListItem
            style={{border:0,position:'relative'}}
            renderItem={<Cell
            style={{paddingLeft:'1rem',height: '2.5rem'}}
            title={<NavLink to='toast'>Toast 提示框</NavLink>}
            hasArrow={true}
            />}
            onClick={()=>{}}
          />
        </List>
        {this.renderDivide()}
      </div>
    )
  }
}

export default HomePage
