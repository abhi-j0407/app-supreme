import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Register from './pages/Register';

function App() {

  return (
    <main className='main-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
