import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
// import views
import HomePage from '@site/views/HomePage'
import AboutPage from '@site/views/AboutPage'
import NotFoundPage from '@site/views/NotFoundPage'
// import demo
import IconDemo from '@site/views/IconDemo'
import ButtonDemo from '@site/views/ButtonDemo'
import LabelDemo from '@site/views/LabelDemo'
import TagDemo from '@site/views/TagDemo'
import TitleDemo from '@site/views/TitleDemo'
import InputDemo from '@site/views/InputDemo'
import ListDemo from '@site/views/ListDemo'
import CellDemo from '@site/views/CellDemo'
import LinkDemo from '@site/views/LinkDemo'
import TabsDemo from '@site/views/TabsDemo'
import RadioDemo from '@site/views/RadioDemo'
import PullDemo from '@site/views/PullDemo'
import KeyboardDemo from '@site/views/KeyboardDemo'
import PopupDemo from '@site/views/PopupDemo'
import TimeAxisDemo from '@site/views/TimeAxisDemo'
import SwitchDemo from '@site/views/SwitchDemo'
import CheckboxDemo from '@site/views/CheckboxDemo'
import ModalDemo from '@site/views/ModalDemo'
import ToastDemo from '@site/views/ToastDemo'
import PickerDemo from '@site/views/PickerDemo'

export default class AppMain extends React.Component {
  render() {
    const activeStyle = { color: 'blue' }
    return (
      <div style={{position: 'relative',flex: 1,height:'100%'}}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/icon" component={IconDemo} />
          <Route exact path="/button" component={ButtonDemo} />
          <Route exact path="/label" component={LabelDemo} />
          <Route exact path="/tag" component={TagDemo} />
          <Route exact path="/title" component={TitleDemo} />
          <Route exact path="/cell" component={CellDemo} />
          <Route exact path="/list" component={ListDemo} />
          <Route exact path="/input" component={InputDemo} />
          <Route exact path="/link" component={LinkDemo} />
          <Route exact path="/tabs" component={TabsDemo} />
          <Route exact path="/radio" component={RadioDemo} />
          <Route exact path="/pull" component={PullDemo} />
          <Route exact path="/keyboard" component={KeyboardDemo} />
          <Route exact path="/popup" component={PopupDemo} />
          <Route exact path="/timeaxis" component={TimeAxisDemo} />
          <Route exact path="/switch" component={SwitchDemo} />
          <Route exact path="/checkbox" component={CheckboxDemo} />
          <Route exact path="/modal" component={ModalDemo} />
          <Route exact path="/toast" component={ToastDemo} />
          <Route exact path="/picker" component={PickerDemo} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}
