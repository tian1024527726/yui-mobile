import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const NUM_KEYS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['', '0', 'delete_1']];
const NUM_COLSE_KEYS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['close', '0', 'delete_1']];
const NUM_CONFIRM_KEYS = [['1', '2', '3', 'delete_2'], ['4', '5', '6'], ['7', '8', '9', 'confirm_2'], ['.', '0']];
const NUM_COLSE_CONFIRM_KEYS = [['1', '2', '3', 'delete_2'], ['4', '5', '6'], ['7', '8', '9', 'confirm_2'], ['.', '0','close']];
const NUM_X_KEYS = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['x', '0', 'delete_1']];

class KeyBoard extends React.Component {
  static displayName = 'KeyBoard';

  static defaultProps = {
    type: 'numberWithConfirm',
    canConfirm: true
  }

  constructor(props) {
    super(props);

  }

  getKeys = (type) => {
    switch (type) {
      case "number":
        return NUM_KEYS;
      case "numberWithConfirm":
        return NUM_CONFIRM_KEYS;
      case "numberWithClose":
        return NUM_COLSE_KEYS;
      case "numberWithConfirmClose":
        return NUM_COLSE_CONFIRM_KEYS;
      case "numberWithX":
        return NUM_X_KEYS;
      default:
        return NUM_CONFIRM_KEYS;
    }
  }

  onKeyClick = (key) => {
    const { onKeyClick, canConfirm } = this.props;
    if(key == 'confirm' &&  !canConfirm) return false;
    if(key && onKeyClick) onKeyClick(key);
  }

  renderKeys = () => {
    const { type, canConfirm } = this.props;
    return this.getKeys(type).map((item,index) => {
      return (
        <tr key={index}>
          {item.map((item,index) => {
            const tdCls = classNames({
              ['key-close']: item == 'close',
              ['key-delete']: item == 'delete_2' || item == 'delete_1',
              ['key-confirm']: item == 'confirm_2' || item == 'confirm_1',
              ['is-darked']:item == 'delete_1' || item == '',
              ['is-disabled']: !canConfirm && (item == 'confirm_2' || item == 'confirm_1')
            })
            let itemContent, key ;
            switch(item){
              case 'delete_1':
              case 'delete_2':
                itemContent = null;
                key = 'delete';
                break;
              case 'confirm_1':
              case 'confirm_2':
                itemContent = '确定';
                key = 'confirm';
                break;
              case 'close':
                itemContent = null;
                key = 'close';
                break;
              default:
                itemContent = item;
                key = item;
                break;
            }

            return (
              <td
                key={index}
                className={tdCls}
                rowSpan={item=='delete_2' || item=='confirm_2' ? '2' : '1'}
                onClick={() => this.onKeyClick(key)}
              >
                {itemContent}
              </td>
            )
          })}
        </tr>
      )
    })
  }

  render() {
    const {
      className, ...restProps
    } = this.props;

    const numberKeyboardCls = classNames('numeric-keyboard', className, {

    })
    return (
      <div className={numberKeyboardCls}>
        <table>
          <tbody>
            {this.renderKeys()}
          </tbody>
        </table>
      </div>
    )
  }
}

KeyBoard.propTypes = {
  type: PropTypes.oneOf(['number', 'numberWithConfirm','numberWithClose','numberWithConfirmClose','numberWithX']),
  onKeyClick: PropTypes.func,
  canConfirm: PropTypes.bool
}

export default KeyBoard
