import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componets/SignupCard'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import SignupPage from './Pages/SignUppage'
import LoginPage from './Pages/LoginPage'
import GuestNavbar from './componets/GuestNavbar';
import AuthencticatedNavbar from './componets/AuthenticatedNavbar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthencticatedNavbar ishome={true} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/forgotpassword' />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
