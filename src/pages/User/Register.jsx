import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Register extends Component {
  componentDidMount(){
    PubSub.subscribe('open', (msg, data) => {
      console.log(msg, data)
    });
  }
  render() {
    return (
      <div>
        注册
      </div>
    )
  }
}
