import React from 'react'
import Header from '@site/layouts/AppHeader'
import { Radio, Title } from '@ui'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RadioDemo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }
  render() {
    const { checked } = this.state;
    return (
      <article>
        <Header></Header>
        <Title>Radio</Title>
        button类型radio:
        <div style={{ padding: '0 1rem 0 1rem' }}>
          <RadioGroup type='button' name="day" onChange={(value) => { console.log(value) }} defaultValue='a'>
            <RadioButton value='a'>7天</RadioButton>
            <RadioButton value='b'>30天</RadioButton>
            <RadioButton value='c'>3个月</RadioButton>
          </RadioGroup>
        </div>
        radio-group:
        <RadioGroup name='a' defaultValue='1' onChange={(value) => { console.log(value) }} >
          <Radio value='1'>
            <span>快速赎回</span>
          </Radio>
          <Radio value='2'>
            <span>普通赎回</span>
          </Radio>
        </RadioGroup><br />

        单独的radio:
          <Radio
          checked={checked}
          onChange={() => { this.setState({ checked: true }) }}
        ></Radio><br />
        radio-group,block类型:
        <RadioGroup name='a' defaultValue='1' onChange={(value) => { console.log(value) }} >
          <Radio value='1' type={'block'}>
            <span>快速赎回</span>
          </Radio>
          <Radio value='2' type={'block'}>
            <span>普通赎回</span>
          </Radio>
        </RadioGroup><br />
      </article>
    )
  }
}

export default RadioDemo
