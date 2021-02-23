import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer_inner">
          <ul>
            <li>
              <NavLink to='/home' activeClassName='current'>
                <em></em>
                <span>首页</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName='current'>
                <em></em>
                <span>登录</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' activeClassName='current'>
                <em></em>
                <span>注册</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/count' activeClassName='current'>
                <em></em>
                <span>计数器</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
