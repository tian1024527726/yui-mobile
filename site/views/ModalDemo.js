import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Popup, Button, List, Title, Modal } from '@ui'
const ListItem = List.Item;
const Alert = Modal.Alert

class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBottomPopup: false,
      showTopPopup: false,
      ZoomInDemo1: false,
      FadeInDemo1: false,
      ZoomInDemo2: false,
      FadeInDemo2: false,
      ZoomInDemo3: false,
      FadeInDemo3: false,
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
  ZoomInDemo1 = () => {
    this.setState({
      ZoomInDemo1: true
    })
  }
  FadeInDemo1 = () => {
    this.setState({
      FadeInDemo1: true
    })
  }
  ZoomInDemo2 = () => {
    this.setState({
      ZoomInDemo2: true
    })
  }
  FadeInDemo2 = () => {
    this.setState({
      FadeInDemo2: true
    })
  }
  ZoomInDemo3 = () => {
    this.setState({
      ZoomInDemo3: true
    })
  }
  FadeInDemo3 = () => {
    this.setState({
      FadeInDemo3: true
    })
  }
  render() {
    return (
      <article style={{ height: '1800px' }}>
        <Header></Header>
        <Title>Modal</Title>
        <List>
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从下方弹出
                <div>
                  <Button size="small" type='primary' onClick={this.showBottomPopup}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                从上方弹出
                <div>
                  <Button size="small" type='primary' onClick={this.showTopPopup}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:ZoomIn Demo1
                <div>
                  <Button size="small" type='primary' onClick={this.ZoomInDemo1}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:FadeIn Demo1
                <div>
                  <Button size="small" type='primary' onClick={this.FadeInDemo1}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:ZoomIn Demo2
                <div>
                  <Button size="small" type='primary' onClick={this.ZoomInDemo2}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:FadeIn Demo2
                <div>
                  <Button size="small" type='primary' onClick={this.FadeInDemo2}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:FadeIn Demo3
                <div>
                  <Button size="small" type='primary' onClick={this.ZoomInDemo3}>开启</Button>
                </div>
              </div>} />
          <ListItem
            renderItem={
              <div style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
                Alert:FadeIn Demo3
                <div>
                  <Button size="small" type='primary' onClick={this.FadeInDemo3}>开启</Button>
                </div>
              </div>} />
        </List>

        <Modal
          visible={this.state.showBottomPopup}
          popup
          mask={false}
          animationType='slide-up'
          onClose={() => { this.setState({ showBottomPopup: false }) }}
        >
          <div style={{ width: '100%', height: '10rem', backgroundColor: '#fff' }}>
            Hello World!!!!!下方
          </div>
        </Modal>
        <Modal
          visible={this.state.showTopPopup}
          popup
          // animationType='slide-down'
          // transparent={true}
          onClose={() => { this.setState({ showTopPopup: false }) }}
        >
          <div style={{ width: '100%', height: '10rem', backgroundColor: '#fff' }}>
            Hello World!!!!!上方
          </div>
        </Modal>
        <Alert
          visible={this.state.ZoomInDemo1}
          //title={'title'}
          footer={[{ text: '关闭',  onPress: () => { this.setState({ ZoomInDemo1: false }) } }, { text: '拨打咨询电话', onPress: () => { alert('拨打电话') } }]}
        >
          <div>
            抱歉，被保险人的健康状况不符合该
产品投保的要求，如需购买相关保障请拨打咨询电话 95511-4-4。
          </div>
        </Alert>
        <Alert
          visible={this.state.FadeInDemo1}
          transitionName='ym-fade'
          footer={[{ text: '关闭', onPress: () => { this.setState({ FadeInDemo1: false }) } }, { text: '拨打咨询电话', onPress: () => { alert('拨打电话') } }]}
        >
          <div>
            抱歉，被保险人的健康状况不符合该
产品投保的要求，如需购买相关保障请拨打咨询电话 95511-4-4。
          </div>
        </Alert>
        <Alert
          visible={this.state.ZoomInDemo2}
          footer={[{ text: '知道了', onPress: () => { this.setState({ ZoomInDemo2: false }) } }]}
        >
          <div>
            社保指的是海亿账通互联网科技有限公司运作的金融亿超市作为交易服务平台进行信息发布，不对任何投资人及/或任何交易提供任何担保。
          </div>
        </Alert>
        <Alert
          transitionName='ym-fade'
          visible={this.state.FadeInDemo2}
          footer={[{ text: '知道了', onPress: () => { this.setState({ FadeInDemo2: false }) } }]}
        >
          <div>
            社保指的是海亿账通互联网科技有限公司运作的金融亿超市作为交易服务平台进行信息发布，不对任何投资人及/或任何交易提供任何担保。
          </div>
        </Alert>
        <Alert
          visible={this.state.ZoomInDemo3}
          title={'健康告知'}
          style={{ width: '85%' }}
          footer={[{ text: '是' }, { text: '否', onPress: () => { this.setState({ ZoomInDemo3: false }) } }]}
        >
          <div>
            <div style={{ color: '#FF7C00' }}>被保人是否正在及曾经有以下疾病？</div>
            血、紫斑症? (9)糖尿病、类风湿性关节炎、肢端肥大症、脑下垂体机能亢进或低下、肾上腺功能亢进或低下？ (10)红斑性狼疮、胶原症？ (11)艾滋病或艾滋病携带者? (12)酒精或药物溢用成瘾、眩晕症、脑震荡、肢体麻痹？ (13)食道、胃、十二指肠溃疡或出血、溃疡性大肠炎、胰脏炎？ (14)肝脓疡、黄疽，肝或脾肿大? (15)慢性支气管炎、气喘、肺脓疡、肺栓塞？ (16)痛风、高血脂症、青光眼、白内障？ (17)乳腺炎、乳漏症、子宫内膜异位症，阴道异常出血（女性被保险人回答）？肝脓疡、黄疽，肝或脾肿大? (15)慢性支气管炎、气喘、肺脓疡、肺栓塞？白内障？
          </div>
        </Alert>
        <Alert
          visible={this.state.FadeInDemo3}
          title={'健康告知'}
          style={{ width: '85%' }}
          transitionName='ym-fade'
          footer={[{ text: '是' }, { text: '否', onPress: () => { this.setState({ FadeInDemo3: false }) } }]}
        >
          <div>
            <div style={{ color: '#FF7C00' }}>被保人是否正在及曾经有以下疾病？</div>
            血、紫斑症? (9)糖尿病、类风湿性关节炎、肢端肥大症、脑下垂体机能亢进或低下、肾上腺功能亢进或低下？ (10)红斑性狼疮、胶原症？ (11)艾滋病或艾滋病携带者? (12)酒精或药物溢用成瘾、眩晕症、脑震荡、肢体麻痹？ (13)食道、胃、十二指肠溃疡或出血、溃疡性大肠炎、胰脏炎？ (14)肝脓疡、黄疽，肝或脾肿大? (15)慢性支气管炎、气喘、肺脓疡、肺栓塞？ (16)痛风、高血脂症、青光眼、白内障？ (17)乳腺炎、乳漏症、子宫内膜异位症，阴道异常出血（女性被保险人回答）？肝脓疡、黄疽，肝或脾肿大? (15)慢性支气管炎、气喘、肺脓疡、肺栓塞？白内障？
          </div>
        </Alert>
      </article>
    )
  }
}



export default ModalPage
