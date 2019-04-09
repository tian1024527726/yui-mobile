import React from 'react';
import Header from '@site/layouts/AppHeader'
import { Pull, Cell, List, Title } from '@ui';

class PullDemo extends React.Component {
  constructor(props) {
    super(props)
    this.isUnMounted = false;
    this.state = {
      data: [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,,1,1],
      noMoreData: false
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
  componentDidMount(){}
  componentWillUnmount() {
    this.isUnMounted = true;
  }

  render() {
    const { noMoreData } = this.state
    return (
      <div className='pullPage'>
        <Header></Header>
        <div className='pullScroll'>
          <Pull
            ref={(node) => window.pull = node}
            canPullDown={true}
            canPullUp={true}
            //containerHeight={'600px'}
            finishPullDown={() => {
              return new Promise((resolve, reject) => {
                console.log('刷新中'); setTimeout(() => {
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                  }, resolve)
                }, 1000)
              })
            }}
            finishPullUp={() => {
              return new Promise((resolve, reject) => {
                console.log('加载更多中')
                setTimeout(() => {
                  const data = [].concat(this.state.data,[1,1,1,1])
                  console.log(data)
                  if (this.isUnMounted) return false;
                  this.setState({
                    data: data
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
