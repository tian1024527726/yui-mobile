import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
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
          <Redirect exact from='/' to='/yui.mobile' />
          <Route exact path="/yui.mobile" component={HomePage} />
          <Route exact path="/yui.mobile/icon" component={IconDemo} />
          <Route exact path="/yui.mobile/button" component={ButtonDemo} />
          <Route exact path="/yui.mobile/label" component={LabelDemo} />
          <Route exact path="/yui.mobile/tag" component={TagDemo} />
          <Route exact path="/yui.mobile/title" component={TitleDemo} />
          <Route exact path="/yui.mobile/cell" component={CellDemo} />
          <Route exact path="/yui.mobile/list" component={ListDemo} />
          <Route exact path="/yui.mobile/input" component={InputDemo} />
          <Route exact path="/yui.mobile/link" component={LinkDemo} />
          <Route exact path="/yui.mobile/tabs" component={TabsDemo} />
          <Route exact path="/yui.mobile/radio" component={RadioDemo} />
          <Route exact path="/yui.mobile/pull" component={PullDemo} />
          <Route exact path="/yui.mobile/keyboard" component={KeyboardDemo} />
          <Route exact path="/yui.mobile/popup" component={PopupDemo} />
          <Route exact path="/yui.mobile/timeaxis" component={TimeAxisDemo} />
          <Route exact path="/yui.mobile/switch" component={SwitchDemo} />
          <Route exact path="/yui.mobile/checkbox" component={CheckboxDemo} />
          <Route exact path="/yui.mobile/modal" component={ModalDemo} />
          <Route exact path="/yui.mobile/toast" component={ToastDemo} />
          <Route exact path="/yui.mobile/picker" component={PickerDemo} />
          <Route path="/yui.mobile/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}
