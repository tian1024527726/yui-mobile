import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import Icon from '../icon';

class Pull extends React.Component {

  constructor(props) {
    super(props)
    this.isUnMounted = false;
    this.pullDownState = {
      pullingDown: '下拉即可刷新...',
      beforeRefresh: '释放即可刷新...',
      refreshing: '加载中...'
    }
    this.pullUpState = {
      pullingUp: props.pullingUpMsg || '加载更多',
      noMoreData: props.bottomMsg || '没有更多记录'
    }
    this.state = {
      pullDownState: this.pullDownState['pullingDown'],
      showPullTop: false,
      topLeftRotate: 0,
      topRightRotate: 0,
      topShowLoadingRight: false,
      topRotating: false,
      bottomLeftRotate: -180,
      bottomRightRotate: -160,
      bottomShowLoadingRight: true,
      bottomRotating: false
    }
  }
  scrollToTop = () => {
    if(this.scroll){
      this.scroll.scrollTo(0,0);
    }
  }
  componentDidMount() {
    const {
      canPullDown, canPullUp, showScrollBar, preventClick, preventTap, finishPullDown, finishPullUp, bounceTime
    } = this.props;

    const pullUpLoad = {
      threshold: 0
    }
    const pullDownRefresh = {
      threshold: 40,
      stop: 40
    }
    this.scroll = new BScroll(this.refs.scroll, {
      //探针作用，实时监测滚动位置
      probeType: 3,
      bounceTime: bounceTime || 300,
      pullDownRefresh: canPullDown ? pullDownRefresh : false,
      pullUpLoad: canPullUp ? pullUpLoad : false,
      scrollbar: showScrollBar || false,
      click: preventClick || true,
      tap: preventTap || true
    });

    const handlePullDown = (e) => {
      //记录最大的scrollY的值
      const maxScrollY = this.scroll.maxScrollY;

      let topLeftRotate, topRightRotate, topShowLoadingRight;
      if (e.y >= 0 && e.y < pullDownRefresh.threshold) {
        if (e.y < pullDownRefresh.threshold / 2) {
          topLeftRotate = (360 / pullDownRefresh.threshold) * (Math.abs(e.y));
          topShowLoadingRight = false;
        } else if (e.y > pullDownRefresh.threshold / 2 && e.y < (pullDownRefresh.threshold - 5)) {
          topRightRotate = (360 / pullDownRefresh.threshold) * (Math.abs(e.y - pullDownRefresh.threshold / 2));
          topShowLoadingRight = true;
        } else {
          topShowLoadingRight = true;
        }
        this.setState({
          pullDownState: this.pullDownState['pullingDown'],
          showPullTop: true,
          topLeftRotate: topLeftRotate,
          topRightRotate: topRightRotate,
          topShowLoadingRight: topShowLoadingRight
        })
      } else if (e.y >= pullDownRefresh.threshold) {
        topLeftRotate = 180;
        topRightRotate = (360 / pullDownRefresh.threshold) * (Math.abs(pullDownRefresh.threshold / 2 - 5));
        topShowLoadingRight = true;
        this.setState({
          pullDownState: this.pullDownState['beforeRefresh'],
          showPullTop: true,
          topLeftRotate: topLeftRotate,
          topRightRotate: topRightRotate,
          topShowLoadingRight: topShowLoadingRight
        })
      } else if ((e.y - pullDownRefresh.threshold) < maxScrollY) {
        this.setState({
          bottomLeftRotate: -180,
          bottomRightRotate: -(360 / pullDownRefresh.threshold) * (Math.abs(pullDownRefresh.threshold / 2 - 5)),
          bottomShowLoadingRight: true
        })
      }
    }

    this.scroll.on('beforeScrollStart', (e) => {
      if (!canPullDown) return false;
      //注册scroll事件
      this.scroll.on('scroll', handlePullDown)
    })

    this.scroll.on('touchEnd', (e) => {
      if (!canPullDown) return false;

      //移除scroll事件
      this.scroll.off('scroll', handlePullDown);

      if (e.y >= pullDownRefresh.threshold) {
        this.setState({
          topRotating: true
        })
      }
    })

    this.scroll.on('pullingUp', async (e) => {
      if (!canPullUp || this.props.noMoreData || !finishPullUp) {
        this.scroll.finishPullUp();
        this.scroll.refresh();
        return false
      };

      this.setState({
        bottomRotating: true,
      })
      await finishPullUp();
      this.scroll.finishPullUp();
      this.scroll.refresh();

      if (this.isUnMounted) return false;
      this.setState({
        bottomRotating: false
      })
    })

    this.scroll.on('pullingDown', async (e) => {
      if (!canPullDown) {
        this.scroll.finishPullDown();
        this.scroll.refresh();
        return false;
      }

      this.setState({
        pullDownState: this.pullDownState['refreshing'],
        topLeftRotate: 180,
        topRightRotate: (360 / pullDownRefresh.threshold) * (Math.abs(pullDownRefresh.threshold / 2 - 5))
      })
      finishPullDown && await finishPullDown();
      this.scroll.finishPullDown();
      this.scroll.refresh();
    })

    this.scroll.on('scrollEnd', (e) => {
      const maxScrollY = this.scroll.maxScrollY;
      //回到初始位置初始化状态
      if (e.y == 0) {

        this.setState({
          topRotating: false,
          topLeftRotate: 0,
          topRightRotate: 0
        })
      } else if (e.y == maxScrollY) {

      }
    })
  }
  componentWillReceiveProps() {
    if(this.scroll){
      window.scroll = this.scroll
      this.scroll.refresh();
    }
   }
  componentWillUnmount() {
    this.isUnMounted = true;
  }
  renderBottomPocket() {
    const bottomPocketCls = classNames('pull-bottom-pocket')
    const pullUpLoading = classNames('pull-loading', {
      ['pull-loading-rotating']: this.state.bottomRotating
    })
    const loadingLeftStyle = {
      transform: `rotate(${this.state.bottomLeftRotate}deg)`
    }
    const loadingRightStyle = {
      transform: `rotate(${this.state.bottomRightRotate}deg)`,
      display: this.state.bottomShowLoadingRight ? 'block' : 'none'
    }

    return (
      <div className={bottomPocketCls}>
        {!this.props.noMoreData && this.props.finishPullUp && <div className={pullUpLoading}>
          <div className='pull-loading-center'>
            <Icon type='arrow-down2' size='xs'></Icon>
          </div>
          <div className='pull-loading-left'></div>
          <div className='pull-loading-rotate-left' style={loadingLeftStyle}>
            <div className='left'></div>
          </div>
          <div className='pull-loading-rotate-right' style={loadingRightStyle}>
            <div className='right'></div>
          </div>
        </div>}
        <div className='pull-caption'>
          {(this.props.noMoreData || !this.props.finishPullUp) ? this.pullUpState['noMoreData'] : this.pullUpState['pullingUp']}
        </div>
      </div>
    )
  }
  renderTopPocket() {
    const topPocketCls = classNames('pull-top-pocket', {
      ['show-pull-top-pocket']: this.state.showPullTop
    })

    const pullDownLoading = classNames('pull-loading', {
      ['pull-loading-rotating']: this.state.topRotating
    })
    const loadingLeftStyle = {
      transform: `rotate(${this.state.topLeftRotate}deg)`
    }
    const loadingRightStyle = {
      transform: `rotate(${this.state.topRightRotate}deg)`,
      display: this.state.topShowLoadingRight ? 'block' : 'none'
    }
    return (
      <div className={topPocketCls}>
        <div className={pullDownLoading}>
          <div className='pull-loading-center'>
            <Icon type='arrow-down2' size='xs'></Icon>
          </div>
          <div className='pull-loading-left'></div>
          <div className='pull-loading-rotate-left' style={loadingLeftStyle}>
            <div className='left'></div>
          </div>
          <div className='pull-loading-rotate-right' style={loadingRightStyle}>
            <div className='right'></div>
          </div>
        </div>
        <div className='pull-caption'>
          {this.state.pullDownState}
        </div>
      </div>
    )
  }
  render() {
    const {
      canPullDown, canPullUp, className, pullContent, containerHeight
    } = this.props;

    const pullCls = classNames('pull', 'scroll-wrapper', className)

    return (
      <div ref='scroll' className={pullCls} style={{ height: `${containerHeight}` }}>
        <div className='scroll-content'>
          {pullContent}
          {canPullDown && this.renderTopPocket()}
          {canPullUp && this.renderBottomPocket()}
        </div>
      </div>
    )
  }
}

Pull.propTypes = {
  canPullDown: PropTypes.bool,
  canPullUp: PropTypes.bool,
  containerHeight: PropTypes.string,
  finishPullDown: PropTypes.func,
  finishPullUp: PropTypes.func,
  showScrollBar: PropTypes.bool,
  preventClick: PropTypes.bool,
  preventTap: PropTypes.bool,
  noMoreData: PropTypes.bool,
  bounceTime: PropTypes.number,
  pullContent: PropTypes.node,
  bottomMsg: PropTypes.string,
  pullingUpMsg: PropTypes.string
}

export default Pull;
