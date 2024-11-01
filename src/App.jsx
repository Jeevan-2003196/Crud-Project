import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='/read/:id' element={<Read />} />
    </Routes>
  )
}

export default App