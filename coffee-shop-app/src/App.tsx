
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CoffeeCreation from './assets/Components/CoffeeCreation/CoffeeCreation'
import Header from './assets/Components/Header/Header'
import Index from './assets/Components/Index/Index'
import Login from './assets/Components/Login/Login'
import Menu from './assets/Components/Menu/Menu'
import UserCreation from './assets/Components/User-Creation/UserCreation'

function App() {
  //<Login></Login>
//<Index></Index>
//<UserCreation></UserCreation>
//<Menu></Menu>
  return (
    <>
    <Router>
      <Header /> {/* Header is always visible on all pages */}
      <Routes>
        <Route path="/" element={<Index/>} /> {/* Renders Index component for the home page */}
        <Route path="/login" element={<Login/>} /> {/* Renders Login component */}
        <Route path="/menu" element={<Menu/>} /> {/* Renders Menu component */}
        <Route path="/admin" element={<CoffeeCreation/>} /> {/* Renders CoffeeCreation component */}
        <Route path="/createaccount" element={<UserCreation/>} /> {/* Renders UserCreation component */}
      </Routes>
    </Router>
    </>
  )
}

export default App
