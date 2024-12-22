import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './pages/RegistrationForm'
import DataTable from './pages/Datatable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RegistrationForm/>
    <DataTable/>
    </>
  )
}

export default App
