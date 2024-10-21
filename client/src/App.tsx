import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { PageLayout, ServerBar } from './components'
import { useState } from 'react'

function App() {
  const localTheme = localStorage.getItem('theme');
  const [theme,setTheme] = useState<string>(localTheme??'standard')

  return (
    <>
      <ServerBar ServerArray={[]}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout theme={theme} setTheme={(t:string)=>setTheme(t)}></PageLayout>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
