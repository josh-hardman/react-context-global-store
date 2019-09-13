import React from 'react'
import logo from './logo.svg'
import { UsersProvider, AssessmentsProvider } from './context/providers'
import UserInfo from './UserInfo'
import './App.css'

function App() {
  return (
    <div className='App'>
      <UsersProvider>
        <AssessmentsProvider>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <UserInfo />
          </header>
        </AssessmentsProvider>
      </UsersProvider>
    </div>
  )
}

export default App
