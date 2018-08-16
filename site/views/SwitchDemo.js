import React from 'react';
import Header from '@site/layouts/AppHeader'
import { Switch, Label, Title } from '@ui';

class SwitchDemo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article>
        <Header></Header>
        <Title>Switch</Title>
        <Switch
          size='xs'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='s'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='m'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='l'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='xl'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='xxl'
          onChange={(status)=>{console.log(status)}}
        /><br/>
        <Switch
          size='xxxl'
          onChange={(status)=>{console.log(status)}}
        />
      </article>
    )
  }
}

export default SwitchDemo
