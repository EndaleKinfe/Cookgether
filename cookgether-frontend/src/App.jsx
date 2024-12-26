import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './componets/SignupCard'
import SignupCard from './componets/SignupCard'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupCard />} />
        <Route path="/signup" element={<SignupCard />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
