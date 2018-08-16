import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class AppIframe extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='AppIframe'>
        <div className="mobile-wrapper" style={{ pointerEvents: "auto" }}>
          <div id="aside-demo" className="aside-demo">
            <div style={{ width: "377px", height: "620px" }}>
              <div className="demo-preview-wrapper">
                <div className="demo-preview-header">
                  <div className="demo-preview-statbar">
                    <img style={{ width: "350px", margin: "0px 2px" }} alt="presentation" src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
                  </div>
                  <div className='url-box-wrapper' style={{ height: "40px" }}>
                    <div className="url-box">https://mobile.ant.design/kitchen-sink/components/menu?lang=zh-CN#menu-demo-3</div>
                  </div>
                </div>
                <section className="code-box-demo code-box-demo-preview">
                  <iframe src='https://h0-stg.yztcdn.com/h5_productmarket/client/index.html' style={{ display: 'block', width: "377px", height: "548px", borderTop: "none", borderRight: "1px solid rgb(247, 247, 247)", borderBottom: "1px solid rgb(247, 247, 247)", borderLeft: "1px solid rgb(247, 247, 247)", borderImage: "initial", boxShadow: "rgb(235, 235, 235) 0px 2px 4px" }} />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AppIframe.propTypes = {
  data: PropTypes.array
}

export default AppIframe;
