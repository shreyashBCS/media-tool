
import { Routes, Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar'
import CustomNavbar from './Components/CustomNavbar';
import Trial from './Components/Trial'

function App() {

  return (
    <>
      <CustomNavbar />


      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
    </>
  )
}

export default App
