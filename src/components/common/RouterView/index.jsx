import React, { Component, Suspense, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routers from '../../../router'
import Loading from '../Loading'

export default class index extends Component {
  state = {
    router: []
  }
  deepArr = (arr, prev) => {
    let newArr = [];
    arr.forEach(item => {
      try {
        if (item.hasOwnProperty('children') && Array.isArray(item['children'])) {
          newArr.push(...this.deepArr(item['children'], item.path)) 
        }
        else if (item.hasOwnProperty('redirect')) {
          newArr.push( {...item,path: prev + item.path,redirect: prev + item.redirect})
        } else {
          newArr.push( {...item, path: prev + item.path})
        }
      } catch (error) {
        console.error(error)
      }
    })
    return newArr
  }
  deepArr2 = (arr, prev) => {
    arr.map(item => {
      if(item.hasOwnProperty('redirect')) {
        return <Redirect to={prev+ item.redirect} key={index} path={prev + item.path}/>
      }
      if(item.hasOwnProperty('children')) {
        return this.deepArr2(item.children, prev + item.path)
      }
      return <Route path={prev + item.path} component={item.component} key={index} ></Route>
    })

  }
  componentDidMount() {
    const router = this.deepArr(routers, '')
    this.setState(() => ({ router }), ()=> {
      console.log(this.state.router)
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
                return this.deepArr2(item.children, item.path)
              }
              return <Route path={item.path} component={item.component} key={index} ></Route>
            })
          }
        </Switch>
      </Suspense>
    )
  }
}
