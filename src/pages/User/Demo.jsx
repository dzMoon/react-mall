import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Demo extends Component {
  open = () => {
    PubSub.publish('open','hello world')
  }
  render() {
    return (
      <div>
        <div onClick={this.open}>Demo0ye</div>
      </div>
    )
  }
}
