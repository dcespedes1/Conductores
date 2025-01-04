import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import Preoperacional from './pages/Preoperacional';
import HomeA from './pages/HomeA';
import IPreoperacional from './pages/IPreoperacional';
import IMoviles from './pages/Moviles';
import Conductores from './pages/Conductores';
import AgregarC from './pages/AgregarC';
import AgregarM from './pages/AgregarM';
import ActualizarMovil from './pages/AMovil';

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preoperacional" element={<Preoperacional />} /> 
          <Route path="/homea" element={<HomeA />} /> 
          <Route path="/ipreoperacional" element={<IPreoperacional />} />
          <Route path='/moviles' element={<IMoviles />} />
          <Route path='/conductores' element={<Conductores />} />
          <Route path='/agregarC' element={<AgregarC />} />
          <Route path='/agregarM' element={<AgregarM />} />
          <Route path='/actualizarMovil/:ID_Movil' element={<ActualizarMovil />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
