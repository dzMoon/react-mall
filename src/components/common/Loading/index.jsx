import React, { Component } from 'react'
import { connect } from 'react-redux'
import loading from '../../../assets/img/loading.gif'
class LoadingUI extends Component {
  render() {
    return (
      <div className="react-loading" style={{ display: this.props.loading === false ? 'none' : 'flex' }}>
        <img src={loading} />
      </div>
    )
  }
}
export default connect(state => ({ ...state }), {

})(LoadingUI)
