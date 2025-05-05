import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Nosotros from './Pages/Nosotros'
import {home,nosotros} from './Routes/path'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home/>}/>
        <Route path={nosotros} element={<Nosotros/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
