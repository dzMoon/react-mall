import React, { Component, Fragment, Suspense } from 'react'
import RouterView from './components/common/RouterView'
import Alert from './components/common/Alert'
import Loading from './components/common/Loading'
import Confirm from  './components/common/Confirm'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Loading/>
        <Alert/>
        <Confirm/>
        <RouterView />
      </Fragment>
    )
  }
}
