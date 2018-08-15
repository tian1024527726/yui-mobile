import React from 'react';
import Header from '@site/layouts/AppHeader'
import classNames from 'classnames';
import { TimeAxis, Title } from '@ui';

class TimeAxisDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Header></Header>
        <Title>TimeAxis</Title>
        <Title size='5'>水平时间轴:</Title>
        <TimeAxis
          dataList={[
            {
              text: '申请提交',
              time: '预计2017-12-30 23:22',
            },
            {
              text: '订单确认失败',
              time: '2017-12-31 23:22',
            },
            {
              text: '退款到账',
              time: '预计2018-01-01 24:00前',
            },
          ]}
          currentStep={2}
        />
        <Title size='5'>垂直时间轴:</Title>
        <TimeAxis
          direction='v'
          dataList={[
            {
              text: '申请提交',
              time: '2017-12-30 23:22',
            },
            {
              text: '订单确认失败',
              time: '2017-12-31 23:22',
            },
            {
              text: '退款到账',
              time: '预计2018-01-01 24:00前',
            },
          ]}
          currentStep={2}
        />
      </article>
    )
  }
}

export default TimeAxisDemo;
