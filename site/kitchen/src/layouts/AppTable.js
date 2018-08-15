import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class AppTable extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <table className='AppTable'>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => {
            return (
              <tr key={index}>
                {item.map((item,index) => {
                  return (
                    <td key={index}>
                      {item}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

AppTable.propTypes = {
  data: PropTypes.array
}

export default AppTable;
