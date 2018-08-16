import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Input, Label, Icon, List, Title, Popup,KeyBoard, Button } from '@ui'
const ListItem = List.Item;
const InputNumber = Input.Number

  class InputDemo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        canConfirm: false,
        value: '',
        visible: false,
        showCursor: false,
        showAgeWarning: false
      }
    }
    render(){
      const { value,showCursor, showAgeWarning} = this.state
      return (
        <article style={{marginBottom:'18rem'}}>
          <Header></Header>
          <Title>Input</Title>
          带label的input:
          <Input bordered addonBefore='姓名' style={{padding:'0 1.125rem 0 1.125rem',background:'#FFF'}} value='啦啦啦' onBlur={()=>{console.log(1212)}}></Input><br/>
          使用List容器的input:
          <List>
            <ListItem
              renderItem={<Input
              addonBefore='姓名'
              placeholder='hello'
              value='啦啦啦'
              readOnly
              suffix={<Icon type='arrow-right' />}
              onFocus={(e)=>{console.log(e.target)}}/>}
              onClick={()=>{console.log(12)}}
            />
            <ListItem
              style={{overflow:'inherit'}}
              renderItem={<Input
              ref={node => this.ageInput = node}
              addonBefore='年龄'
              placeholder='hello'
              showClean={true}
              onClean={()=>{}}
              onBlur={(val,res)=>{console.log(val,res)}}
              onChange={(val)=>{console.log(val)}}
              onFocus={()=>{console.log(1);this.setState({showAgeWarning:false})}}
              rule={{regExp:/^\d+$/,msg:'请输入正确的年龄',emptymsg:'请输入年龄'}}
              />}
            />
            <ListItem
              renderItem={<Input
              addonBefore='性别'
              //placeholder='hello'
              rule={{regExp:/^\d+$/,msg:'请输入正确的性别'}}
              showClean={true}
              //suffix={<Icon type='arrow-right' />}
              />}
            />
            <ListItem
              renderItem={<Input
              placeholder='hello'
              prefix={<Icon type='clear' style={{color:'#999'}}/>}
              suffix={<Icon type='arrow-right' />}/>}
            />
            <ListItem
              renderItem={<InputNumber
              addonBefore='数字'
              value={value}
              showClean={true}
              //placeholder='hello'
              showCursor={showCursor}
              suffix={<Icon type='arrow-right' />}
              onClick={() => this.setState({visible:true,showCursor:true})}
              onClean={()=>{this.setState({value:''})}}
              />}
            />
            <ListItem
              renderItem={<InputNumber
              addonBefore='选择生效日期'
              value={'2018年6月12日'}
              showWarning={true}
              rule={{msg:'被保人年龄不符合该保险要求',emptymsg:'请输入年龄'}}
              suffix={<Icon type='arrow-right' />}
              onClick={() => this.setState({visible:true,showCursor:true})}
              />}
            />
          </List>
          <Popup
            mask={false}
            visible={this.state.visible}
            >
              <KeyBoard
                type='numberWithConfirmClose'
                onKeyClick={(key) => { if(key == 'confirm' || key == 'close') {this.setState({visible: false});return;};key = this.state.value + key ;this.setState({ value: key, canConfirm: true}) }}
              />
          </Popup><br/>
          <List>
            <ListItem
              renderItem={<Input
              addonBefore='车主姓名'
              placeholder='请输入姓名'
              onFocus={(e)=>{console.log(e.target)}}/>}
            />
            <ListItem
              renderItem={<Input
              addonBefore='车主姓名'
              placeholder='请输入姓名'
              onFocus={(e)=>{console.log(e.target)}}/>}
            />
            <ListItem
              renderItem={<Input
              addonBefore='车主姓名'
              placeholder='请输入姓名'
              onFocus={(e)=>{console.log(e.target)}}/>}
            />
            <ListItem
              renderItem={<Input
              addonBefore='车主姓名'
              placeholder='请输入姓名'
              onFocus={(e)=>{console.log(e.target)}}/>}
            />
            <ListItem
              renderItem={<Input
              addonBefore='车主姓名'
              placeholder='请输入姓名'
              onFocus={(e)=>{console.log(e.target)}}/>}
            />
          </List>
          <Button onClick={()=>{this.ageInput.validate((status,val)=>{console.log(status,val)})}} >校验年龄Input</Button>
        </article>
      )
    }
}

export default InputDemo
