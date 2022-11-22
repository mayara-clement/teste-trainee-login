import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import PageLogin from './pages/PageLogin'




export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/login" >
        <PageLogin />
      </Route>
      <Redirect from='/' to="/login" />
    </Switch>
  </BrowserRouter>
  )

}