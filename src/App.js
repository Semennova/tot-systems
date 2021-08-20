import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import './App.css'
import  FloodChatContainer  from './Components/FloodChat/FloodChatContainer'
import  HeaderContainer  from './Components/Header/HeaderContainer'
import { Home } from './Components/Home/Home'
import { LoginContainer } from './Components/Login/LoginContainer'
import { Nav } from './Components/Navigation/Nav'
import  WorkChatContainer  from './Components/WorkChat/WorkChatContainer'
import { store } from './redux/redux-store'


const  App = () => {
    return (
   
      <HashRouter>
          <div className="App">
            <HeaderContainer />
            <Nav login={store.getState().auth.login} setUserData={store}/>
            <Switch>
              <Route path='/work' render={()=>  <WorkChatContainer />}/>
              <Route path='/flood' render={()=> <FloodChatContainer />}/>
              <Route path='/login' render={()=> <LoginContainer />}/>
              <Route path='*' render={()=> <Home />}/>
            </Switch>
          </div>
       </HashRouter>  

    );
}

export default App;
