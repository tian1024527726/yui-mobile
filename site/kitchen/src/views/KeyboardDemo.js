
import React from 'react'
import Header from '@site/layouts/AppHeader'
import { KeyBoard, Popup, Button, Title } from '@ui'

class KeyboardDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canConfirm: false,
      value: '',
      visible: false,
      keyboardType: 'numberWithConfirmClose'
    }
  }

  render() {
    const { keyboardType } = this.state
    return (
      <article>
        <Header></Header>
        <Title>KeyboardWithPopup</Title>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Button
          onClick={() => this.setState({visible:true,keyboardType:'numberWithConfirmClose'})}
        >显示numberWithConfirmClose</Button>
        <Button
          onClick={() => this.setState({visible:true,keyboardType:'number'})}
        >显示number</Button>
        <Button
          onClick={() => this.setState({visible:true,keyboardType:'numberWithConfirm'})}
        >显示numberWithConfirm</Button>
        <Button
          onClick={() => this.setState({visible:true,keyboardType:'numberWithClose'})}
        >显示numberWithClose</Button>
        <Button
          onClick={() => this.setState({visible:true,keyboardType:'numberWithX'})}
        >显示numberWithX</Button>
        <Button
          onClick={() => this.setState({visible:false})}
        >隐藏</Button>
        </div>
        <Popup
          mask={false}
          visible={this.state.visible}
        >
          <KeyBoard
            type={keyboardType}
            onKeyClick={(key) => { this.setState({ value: key, canConfirm: true }) }}
          />
        </Popup>
      </article>
    )
  }
}

export default KeyboardDemo
