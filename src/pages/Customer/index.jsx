import React, { Component } from 'react'
import Header from '../../components/context/Header'
export default class index extends Component {
  render() {
    return (
      <>
        <Header customer={false} title="在线客服"/>
        <article>
          <iframe src="https://sxfae.qiyukf.com/client?k=4f8313971eba393352c7507406f9c9d3&wp=1&robotShuntSwitch=1&robotId=1543084&templateId=6148975"
            style={{ position: 'absolute', top: '0.44rem', width: '100%', height: 'calc(100% - 44px)',border:'none' }} />
        </article>
      </>
    )
  }
}
