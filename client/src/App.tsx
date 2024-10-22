import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { PageLayout, ServerBar } from './components'
import { useState } from 'react'
import { blankData } from './models';

function App() {
  const [theme,setTheme] = useState<string>(localStorage.getItem('theme')??'light')
  const data = blankData();
  return (
    <div className={`flex ${theme}`}>
      <ServerBar ServerArray={data}/>
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<PageLayout theme={theme} setTheme={(t:string)=>{setTheme(t);localStorage.setItem('theme',t)}}></PageLayout>}
          >

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
