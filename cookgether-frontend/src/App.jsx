import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componets/SignupCard'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import SignupPage from './Pages/SignUppage'
import LoginCard from './componets/LoginCard'
import GuestNavbar from './componets/GuestNavbar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestNavbar ishome={true} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path='/forgotpassword' />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
