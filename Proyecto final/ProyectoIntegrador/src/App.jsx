
import { Route, Routes } from 'react-router-dom'
import Body from './Components/Body/Body'
import AgregarProducto from './Pages/AgregarProductos/AgregarProducto'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/agregarproductos' element={<AgregarProducto/>}/>
      </Routes>
      
    </>
  )
}

export default App
