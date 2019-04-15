import React from 'react';
import Header from '@site/layouts/AppHeader'
import { Pull, Cell, List, Title, Button } from '@ui';

class PullDemo extends React.Component {
  constructor(props) {
    super(props)
    this.isUnMounted = false;
    this.state = {
      data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1],
      noMoreData: false,
      bottomMsg: <div style={{fontSize:'1.5rem',color: '#000'}}>1212</div>,
      canPullUp: true,
      canPullDown: true
    }
  }

  renderPullRefreshContent() {
    return (
      <List style={{ backgroundColor: '#fff' }}>
        {this.state.data.map((item, index) => {
          return (
            <List.Item key={index}
              renderItem={<Cell
                title={'产品合同'}
                hasArrow={true}
              />}
            />
          )
        })}
      </List>
    )
  }
  componentDidMount() { }
  componentWillUnmount() {
    this.isUnMounted = true;
  }

  render() {
    const { noMoreData, bottomMsg, canPullDown, canPullUp } = this.state
    return (
      <div className='pullPage'>
        <Header></Header>
        <Button.Group style={{ height: '3rem' }}>
          <Button
            onClick={() => {
              this.setState({
                canPullDown: !this.state.canPullDown
              })
            }}
            size='small'
          >切换canPullDown</Button>
          <Button
            onClick={() => {
              this.setState({
                canPullUp: !this.state.canPullUp
              })
            }}
            size='small'
          >切换canPullUp</Button>
        </Button.Group>
        <div className='pullScroll'>
          <Pull
            ref={(node) => window.pull = node}
            canPullDown={canPullDown}
            canPullUp={canPullUp}
            bottomMsg={bottomMsg}
            containerHeight={500}
            finishPullDown={() => {
              return new Promise((resolve, reject) => {
                console.log('刷新中'); setTimeout(() => {
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                  }, resolve)
                }, 1000)
              })
            }}
            finishPullUp={() => {
              return new Promise((resolve, reject) => {
                console.log('加载更多中')
                setTimeout(() => {
                  const data = [].concat(this.state.data, [1, 1, 1, 1])
                  console.log(data)
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: data,
                    noMoreData: true,
                  }, resolve)
                }, 1000)
              })
            }}
            noMoreData={noMoreData}
            pullContent={this.renderPullRefreshContent()}
          />
        </div>
      </div>
    )
  }
}

export default PullDemo;
