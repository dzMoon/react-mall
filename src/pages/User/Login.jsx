import React, { Component } from 'react'
import Header from '../../components/context/Header'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import demo from './Demo'
import demo2 from './Demo2'
import PubSub from 'pubsub-js'
import RouterView from '../../components/common/RouterView'
export default class Login extends Component {
  componentDidMount() {
    this.token = PubSub.subscribe('open', (msg, data) => {
      console.log(msg, data)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  render() {
    return (
      <>
        <Header title='嵌套路由' />
        <article>
          <NavLink to="/login/demo">demo</NavLink>
          <NavLink to="/login/demo2">demo2</NavLink>
          <Switch>
            <Route path="/login/demo" component={demo}></Route>
            <Route path="/login/demo2" component={demo2}></Route>
            <Redirect path='/' to='/login/demo'></Redirect>
          </Switch>
        </article>


      </>
    )
  }
}
