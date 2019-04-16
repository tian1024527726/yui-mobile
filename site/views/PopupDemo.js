import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Popup, Button, List, Title } from '@ui'
const ListItem = List.Item;

class PopupDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBottomPopup: false,
      showTopPopup: false,
      showLeftPopup: false,
      showRightPopup: false
    }
  }
  showBottomPopup = () => {
    this.setState({
      showBottomPopup: true
    })
  }
  showTopPopup = () => {
    this.setState({
      showTopPopup: true
    })
  }
  showLeftPopup = () => {
    this.setState({
      showLeftPopup: true
    })
  }
  showRightPopup = () => {
    this.setState({
      showRightPopup: true
    })
  }
  render() {
    return (
      <article>
        <Header></Header>
        <Title>Popup</Title>
        <List>
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从下方弹出
                <Button size="small" type='primary' onClick={this.showBottomPopup}>开启</Button>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从上方弹出
                <Button size="small" type='primary' onClick={this.showTopPopup}>开启</Button>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从左方弹出
                <Button size="small" type='primary' onClick={this.showLeftPopup}>开启</Button>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从右方弹出
                <Button size="small" type='primary' onClick={this.showRightPopup}>开启</Button>
              </div>} />
        </List>

        <Popup
          visible={this.state.showBottomPopup}
          onMaskClick={() => { this.setState({ showBottomPopup: false }) }}
        >
          <div style={{ width: '100%', height: '15rem', backgroundColor: '#fff' }}>
            Hello World!!!!!下方
          </div>
        </Popup>
        <Popup
          visible={this.state.showTopPopup}
          onMaskClick={() => { this.setState({ showTopPopup: false }) }}
          direction='top'
        >
          <div style={{ width: '100%', height: '15rem', backgroundColor: '#fff' }}>
            Hello World!!!!!上方
          </div>
        </Popup>
        <Popup
          visible={this.state.showLeftPopup}
          onMaskClick={() => { this.setState({ showLeftPopup: false }) }}
          direction='left'
        >
          <div style={{ height: '100%', width: '10rem', backgroundColor: '#fff' }}>
            Hello World!!!!!左方
          </div>
        </Popup>
        <Popup
          visible={this.state.showRightPopup}
          onMaskClick={() => { this.setState({ showRightPopup: false }) }}
          direction='right'
        >
          <div style={{ height: '100%', width: '10rem', backgroundColor: '#fff' }}>
            Hello World!!!!!右方
          </div>
        </Popup>
      </article>
    )
  }
}



export default PopupDemo
