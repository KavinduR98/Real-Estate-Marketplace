import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact  path='/' element={<Home/>} />
        <Route exact  path='/sign-in' element={<SignIn/>} />
        <Route exact  path='/sign-up' element={<SignUp/>} />
        <Route exact  path='/about' element={<About/>} />
        <Route exact  path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}
