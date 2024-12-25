import { useState } from 'react'
import './App.css'
import RegistrationForm from './pages/RegistrationForm'
import DataTable from './pages/Datatable'

function App() {
  const [btn, setBtn] = useState(false);
  
  

  return (
    <>
    
    <button onClick={() => setBtn(!btn)}>
        {
          btn ? "Registration Page" : "Data Page"
        }
      </button>

    {
      btn ? <DataTable/> : <RegistrationForm/>
    }

    {/* Show data in a single page */}
    {/* <RegistrationForm/>
    <DataTable/> */}
    </>
  )
}

export default App
