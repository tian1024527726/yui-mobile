import React from 'react';
import Header from '@site/layouts/AppHeader'
import { Checkbox, Label, Title } from '@ui';
const CheckboxGroup = Checkbox.Group;

class CheckboxDemo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:null,
      allChecked:false
    }
  }
  handleCheckAll = (e) => {
    if(e.target.checked){
      this.setState({
        value: ['1','2','3'],
        allChecked: true
      })
    }else{
      this.setState({
        value: null,
        allChecked: false
      })
    }
  }
  handleCheckSingle = (e) => {
    console.log(e.target.checked)
  }
  render(){
    const { value, allChecked } = this.state;
    console.log(allChecked)
    return (
      <article>
        <Header></Header>
        <Title>Checkbox</Title>
        checkbox-group:<br/>
        <Checkbox checked={allChecked} onChange={this.handleCheckAll}>全选</Checkbox><br/>
        <CheckboxGroup value={value} onChange={(value)=>{this.setState({value,allChecked:value.length == 3})}}>
          <Checkbox value='1'><span>意见1</span></Checkbox>
          <Checkbox value='2'><span>意见2</span></Checkbox>
          <Checkbox value='3'><span>意见3</span></Checkbox>
        </CheckboxGroup><br/>
        <Checkbox
          onChange={this.handleCheckSingle}
        ><span>同意协议</span></Checkbox><br/>
        type:circle<br/>
        <Checkbox
          onChange={this.handleCheckSingle}
          type={'circle'}
        ><span>同意协议</span></Checkbox><br/>
      </article>
    )
  }
}

export default CheckboxDemo
