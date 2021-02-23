import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearConfirm } from '../../../redux/actions'
//ui组件
class ConfirmUI extends Component {
  sure = () => {
    this.props.clearConfirm(clearConfirm())
    this.props.confirm.okFunc && this.props.confirm.okFunc()
  }
  cancel = () => {
    this.props.clearConfirm(clearConfirm())
    this.props.confirm.cancelFunc && this.props.confirm.cancelFunc()
  }
  render() {
    return (
      <div className="react-confirm" style={{ display: this.props.confirm.info === '' ? "none" : "flex" }}>
        <div >
          <div className="info">{this.props.confirm.info}</div>
          <div className="btn-list">
            <div onClick={this.cancel} className="btn">{this.props.confirm.cancel}</div>
            <div onClick={this.sure} className="btn">{this.props.confirm.sure}</div>
          </div>

        </div>

      </div>
    )
  }
}
//外壳组件
export default connect(state => ({ ...state }), {
  clearConfirm
})(ConfirmUI)
