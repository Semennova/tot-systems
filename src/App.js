import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import  FloodChatContainer  from './Components/FloodChat/FloodChatContainer'
import  HeaderContainer  from './Components/Header/HeaderContainer'
import { LoginContainer } from './Components/Login/LoginContainer'
import { Nav } from './Components/Navigation/Nav'
import  WorkChatContainer  from './Components/WorkChat/WorkChatContainer'
import { store } from './redux/redux-store'


const  App = () => {
    return (
      <BrowserRouter>
          <div className="App">
            <HeaderContainer />
            <Nav login={store.getState().auth.login} setUserData={store}/>
              <Route path='/work' render={()=>  <WorkChatContainer />}/>
              <Route path='/flood' render={()=> <FloodChatContainer />}/>
              <Route path='/login' render={()=> <LoginContainer />}/>
          </div>
      </BrowserRouter>
    );
}

export default App;
