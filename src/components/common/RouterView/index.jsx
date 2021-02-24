import React, { Component, Suspense, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routers from '../../../router'
import Loading from '../Loading'

export default class index extends Component {
  deepArr = (arr, prev) => {
    return arr.map(item => {
      if(item.hasOwnProperty('redirect')) {
        return <Redirect to={prev+ item.redirect} key={index} path={prev + item.path}/>
      }
      if(item.hasOwnProperty('children')) {
        return this.deepArr2(item.children, prev + item.path)
      }
      return <Route path={prev + item.path} component={item.component} key={index} ></Route>
    })

  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            // this.deepArr(this.state.router, '').map(item => item)
            // this.state.router.map(item => item)
          }
          {
            // this.state.router.map((item, index) => {
            //   if(item.hasOwnProperty('redirect')) {
            //     return <Redirect to={item.redirect} key={index} />
            //   }
            //   return <Route path={item.path} component={item.component} key={index} ></Route>
            // })
          }
          {
            routers.map((item, index) => {
              if(item.hasOwnProperty('redirect')) {
                return <Redirect to={item.redirect} key={index} path={item.path}/>
              }
              if(item.hasOwnProperty('children')) {
                this.deepArr(item.children, item.path).map(item=>{
                  if(item.hasOwnProperty('redirect')) {
                    return <Redirect to={item.redirect} key={index} path={item.path}/>
                  }
                  return <Route path={item.path} component={item.component} key={index} ></Route>
                })
              }
              return <Route path={item.path} component={item.component} key={index} ></Route>
            })
          }
        </Switch>
      </Suspense>
    )
  }
}
