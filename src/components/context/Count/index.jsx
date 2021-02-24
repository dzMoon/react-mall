import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, incrementAsync } from '../../../redux/actions'
import Header from '../Header'
class CountUI extends Component {
  increment = () => {
    this.props.increment(5)
  }
  incrementAsync = () => {
    this.props.incrementAsync(10)
  }
  render() {
    return (
      <>
        <Header title="react-redux" />
        <article>
        <h1>总和{this.props.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.incrementAsync}>异步+</button>
        </article>
        
      </>
    )
  }
}
export default connect(state => ({ ...state }), {
  increment,
  incrementAsync
})(CountUI)