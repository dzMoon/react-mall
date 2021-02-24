import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import store from '../../../redux'
import customerService from '../../../assets/img/customerService.png'
class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  customer = () => {
    this.props.history.push('/customer')
  }
  componentDidMount(){
    document.title = this.props.title?this.props.title:"晋金财富欢迎你"
  }
  render() {
    return (
      <Fragment>
        <header className="header" style={{display: this.props.home?'block': 'none'}}>
        <div className="header_inner2 header_inner bg_header">
            <div className="header_logo"></div>
            <a className="login-in_login-out pop in" id="loginOut">{store.isLogin ? '退出' : '登录'}</a>
            <a className="coustomer-service-icon" onClick={this.customer} style={{ display: this.props.customer === false ? 'none' : 'inline-block' }}>
              <img src={customerService} />
            </a>
          </div>
        </header>
        <header className="header">
        <div className="header_inner2 header_inner bg_header"  style={{display: this.props.home?'none': 'block'}}>
            <a className="icon_back icon_gray" style={{ display: this.props.back === false ? 'none' : 'inline-block' }} onClick={this.back}><span>返回</span></a>
            <h1 className="text_gray text-center">{this.props.title}</h1>
            <a className="coustomer-service-icon" onClick={this.customer} style={{ display: this.props.customer === false ? 'none' : 'inline-block' }}>
            <img src={customerService} />
            </a>
          </div>
        </header>
      </Fragment>
    )
  }
}
export default withRouter(Header)
