import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearAlert } from '../../../redux/actions'
class AlertUI extends Component {
  sure = () => {
    this.props.clearAlert(clearAlert())
    this.props.alert.func && this.props.alert.func()
  }
  render() {
    return (
      <div className="react-alert" style={{ display: this.props.alert.info === '' ? "none" : "flex" }}>
        <div >
          <div className="info">{this.props.alert.info}</div>
          <div onClick={this.sure} className="btn">{this.props.alert.btn}</div>
        </div>

      </div>
    )
  }
}
export default connect(state => ({ ...state }), {
  clearAlert
})(AlertUI)
