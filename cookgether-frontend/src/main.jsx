import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import GuestLayout from './Layout/GuestLayout.jsx'
import GuestHome from './Pages/GuestHome.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignupPage from './Pages/SignUppage.jsx'
import AuthencticatedNotNew from './Layout/AuthenticatedNotNew.jsx'
import MessagePage from './Pages/MessagePage.jsx'
import { ContextProvider } from './Context/ContextProvider.jsx'
import AuthenticatedNew from './Layout/AuthenticatedNew.jsx'
import BasicInfoPage from './Pages/BasicInfoPage.jsx'
import CreatorSuggestionPage from './Pages/CreatorSuggestionPage.jsx'
import InterestSelectionPage from './Pages/InterestSelectionPage.jsx'
import HomeFeed from './Pages/HomeFeed.jsx'
import PostPage from './Pages/PostPage.jsx'
import PostCreate from './Pages/PostCreate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthencticatedNotNew/>}>
            <Route index element={<HomeFeed/>} />
            <Route path='message' element={<MessagePage/>} />
            <Route path='post/:id' element={<PostPage/>} />
            <Route path='add' element={<PostCreate/>}/>
          </Route>
          <Route path='/welcome' element={<AuthenticatedNew/>}>
              <Route index element={<BasicInfoPage/>}/>
              <Route path='selectinterest' element={<InterestSelectionPage/>}/>
              <Route path='creatorsuggestion' element={<CreatorSuggestionPage/>}/>

          </Route>
          <Route path='/' element={<GuestLayout/>}>
              <Route path='guest' element={<GuestHome/>} />
              <Route path='login' element={<LoginPage/>} />
              <Route path='signup' element={<SignupPage/>} /> 
              <Route path='forgotpassword' element={<GuestHome/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
)
