import {HashRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {useDispatch} from 'react-redux'
import {init} from './store/initSlice'

export default function App() {
  const dispatch = useDispatch()
  dispatch(init())

  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <PrivateRoute path='/profile' component={Profile}/>
      </Switch>
    </HashRouter>
  )
}
