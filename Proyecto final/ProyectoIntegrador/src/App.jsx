
import { Route, Routes } from 'react-router-dom'
import Body from './Components/Body/Body'
import PanelAdmin from './Pages/AgregarProductos/panelAdmin/panelAdmin'
import AgregarProducto from './Pages/AgregarProductos/AgregarProducto'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/admin' element={<PanelAdmin/>}/>
        <Route path='/admin/agregarProductos' element={<AgregarProducto/>}/>
      </Routes>
      
    </>
  )
}

export default App
