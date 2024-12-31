import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/Logo.png";
import axios from 'axios';

const URI = 'http://localhost:3000/api/movil';

function Moviles() {
  const [moviles, setMoviles] = useState([]);
  useEffect(() => {
    getmoviles();
  }, []);
  const getmoviles = async () => {
    try {
      const res = await axios.get(URI);
      setMoviles(res.data);
    } catch (error) {
      console.error('Error al obtener los móviles:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URI}/${id}`);
      setMoviles(moviles.filter(movil => movil.ID_Movil !== id)); // Eliminamos el móvil de la vista
    } catch (error) {
      console.error('Error al eliminar el móvil:', error);
    }
  };

  return (
    <div className="flex flex-col bg-[#fffef2] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center py-2 bg-transparent z-10">
        <Link to="/HomeA" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">
          🏡
        </Link>
        <Link to="/Conductores" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">
          👮
        </Link>
        <Link to="/Ipreoperacional" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">
          🔧
        </Link>
        <Link to="/moviles" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">
          🚌
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 mt-20">
        <main className="bg-transparent rounded-lg shadow-lg p-6">
          <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
          <h1 className="text-2xl font-bold text-center text-[#2c3e50] mb-4">Inventario de Móviles</h1>
          
          {/* Button to add a new mobile */}
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition block ml-auto mb-4">
            <Link to="/agregarM">Agregar</Link>
          </button>

          {/* Inventory Table */}
          <div className="overflow-x-auto">
            <table className="bg-white table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#30884B] text-white sticky top-0">
                  <th className="px-4 py-2 border">Móvil</th>
                  <th className="px-4 py-2 border">Placa</th>
                  <th className="px-4 py-2 border">T. Vinculación</th>
                  <th className="px-4 py-2 border">RTM</th>
                  <th className="px-4 py-2 border">Exp. RTM</th>
                  <th className="px-4 py-2 border">Ven. RTM</th>
                  <th className="px-4 py-2 border">RCC</th>
                  <th className="px-4 py-2 border">Exp. RCC</th>
                  <th className="px-4 py-2 border">Ven. RCC</th>
                  <th className="px-4 py-2 border">RCE</th>
                  <th className="px-4 py-2 border">Exp. RCE</th>
                  <th className="px-4 py-2 border">Ven. RCE</th>
                  <th className="px-4 py-2 border">SOAT</th>
                  <th className="px-4 py-2 border">Exp. SOAT</th>
                  <th className="px-4 py-2 border">Ven. SOAT</th>
                  <th className="px-4 py-2 border">Exp. Operacion</th>
                  <th className="px-4 py-2 border">Ven. Operacion</th>
                  <th className="px-4 py-2 border">Exp. transito</th>
                  <th className="px-4 py-2 border">Ven. transito</th>
                  <th className="px-4 py-2 border">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {moviles.map((movil, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{movil.ID_Movil}</td>
                    <td className="px-4 py-2 border">{movil.Placa}</td>
                    <td className="px-4 py-2 border">{movil.T_vinculación}</td>
                    <td className="px-4 py-2 border">{movil.RTM}</td>
                    <td className="px-4 py-2 border">{movil.Exp_RTM}</td>
                    <td className="px-4 py-2 border text-orange-500">{movil.Ven_RTM}</td>
                    <td className="px-4 py-2 border">{movil.RCC}</td>
                    <td className="px-4 py-2 border">{movil.Exp_RCC}</td>
                    <td className="px-4 py-2 border text-green-500">{movil.Ven_RCC}</td>
                    <td className="px-4 py-2 border">{movil.RCE}</td>
                    <td className="px-4 py-2 border">{movil.Exp_RCE}</td>
                    <td className="px-4 py-2 border text-red-500">{movil.Ven_RCE}</td>
                    <td className="px-4 py-2 border">{movil.SOAT}</td>
                    <td className="px-4 py-2 border">{movil.Exp_SOAT}</td>
                    <td className="px-4 py-2 border text-green-500">{movil.Ven_SOAT}</td>
                    <td className="px-4 py-2 border">{movil.Exp_Operacion}</td> 
                    <td className="px-4 py-2 border">{movil.Ven_Operacion}</td> 
                    <td className="px-4 py-2 border">{movil.Exp_Transito}</td>
                    <td className="px-4 py-2 border">{movil.Ven_Transito}</td>
                    <td className="px-4 py-2 border flex gap-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400 transition">
                        <Link to={`/ActualizarB/${movil.ID_Movil}`}>✏️</Link>
                      </button>
                      <button
                        onClick={() => handleDelete(movil.ID_Movil)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400 transition"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Moviles;
