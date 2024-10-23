import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { PageLayout, ServerBar } from './components'
import { useState } from 'react'
import { blankData, blankUser } from './models';
import { Direct, Server, Settings } from './pages';

function App() {
  const [theme,setTheme] = useState<string>(localStorage.getItem('theme')??'light')
  const data = blankData();
  const user = blankUser();
  return (
    <div className={`flex ${theme} w-full bg-bg2`}>
      <ServerBar ServerArray={data}/>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<PageLayout></PageLayout>}
          >
            <Route path='/discord/@me/:DirectMessageKey?' element={<Direct friends={user.friendKeys} directMessages={user.directMessageKeys}/>}/>
            <Route path='/discord/:serverKey/:channelKey?' element={<Server server={data[0]}/>}/>
            <Route path='/discord/settings' element={<Settings theme={theme} setTheme={(t:string)=>{setTheme(t)}}/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
