### alert弹框用法
```
import store from '../../redux' //引入sotre
import {alert} from '../../redux/actions' //引入alert action
/*
 * info: 弹框内容
 * func: 点击确定函数
 * btn: 按钮文字，默认确定
 **/
store.dispatch( 
  alert({info: 'qwe123', func: ()=>{
    console.log(2)
  }})
)
```

### confirm弹框用法
```
import store from '../../redux' //引入sotre
import {confirm} from '../../redux/actions' //引入alert action
/*
 * info: 弹框内容
 * okFunc: 确定回调函数
 * cancelFunc: 取消回调函数
 * sure: 按钮文字，默认确定
 * cancel: 按钮文字，默认取消
 **/
store.dispatch( 
  alert({info: 'qwe123', func: ()=>{
    console.log(2)
  }})
)
```
### loading弹框用法
```
import store from '../../redux' //引入sotre
import {loading} from '../../redux/actions' //引入alert action
/*
 * 是否显示等待框
 * 不传 || true 显示
 * false隐藏
 **/
store.dispatch( 
  loading(false)
)
```

### 路由使用

```
import RouterView from './components/common/RouterView'
```
1. router/index.js中配置路径
   1.1 redirect重定向路径
   1.2 component 使用懒加载形式加载组件 M
   1.3 path 请求路径
2. 在页面中使用<RouterView/>

### Header使用

```
import Header from '../../components/context/Header'
```

1. 首页使用
```
<Header/ home={true}>
```
2. 客服页面使用
```
<Header/ customer={false} title="在线客服">
```

3. 其他页面使用
```
<Header/>
```