import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';
import axios from 'axios';

const URI = 'http://localhost:3000/api/conductor';

function Conductores  ()  {
  const [Conductores, setConductores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getconductores();
  }, []);

  const getconductores = async () => {
    try {
      const res = await axios.get(URI);
      setConductores(res.data);
    } catch (error) {
      console.error('Error al obtener los conductores:', error);
    }
  };
  const filteredConductores = Conductores.filter(Conductores =>
    Object.values(Conductores).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URI}/${id}`);
      setConductores(Conductores.filter(conductor => conductor.ID_Conductor !== id)); // Eliminamos el conductor de la vista
    } catch (error) {
      console.error('Error al eliminar el conductor:', error);
    }
  };

  return (
    <div className="flex flex-col bg-[#fffef2] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center py-2 bg-transparent z-10">
        <Link
          to="/HomeA"
          className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition"
        >
          🏡
        </Link>
        <Link
          to="/Conductores"
          className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition"
        >
          👮
        </Link>
        <Link
          to="/Ipreoperacional"
          className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition"
        >
          🔧
        </Link>
        <Link
          to="/moviles"
          className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition"
        >
          🚌
        </Link>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 mt-20">
        <main className="bg-transparent rounded-lg shadow-lg p-6">
          
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-[#2c3e50] mb-4">Inventario de Conductores </h1>
          
          {/* Search */}
          <div className="my-8 flex justify-between items-center space-x-4">
          <input
            type="text"
            placeholder={ 'Buscar...' }
            className= "w-full max-w-xs p-3 rounded-lg border-2 border-green-600 bg-[#fffef2] text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          <span>
            {`Mostrando ${Math.min(filteredConductores.length, Conductores.length)} de ${Conductores.length} Conductores`}
          </span>
          
          {/* Add Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#30884B] text-white px-4 py-2 rounded-md hover:bg-[#26703A] transition">
              <Link to="/AgregarC">Agregar</Link>
            </button>
          </div>
          {/* Conductores Table */}
          <div className="overflow-x-auto">
            <table className="bg-white  table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#30884B] text-white sticky top-0">
                  <th className="px-4 py-2 border">Número de Identificación</th>
                  <th className="px-4 py-2 border">Nombre</th>
                  <th className="px-4 py-2 border">Apellido</th>
                  <th className="px-4 py-2 border">Teléfono</th>
                  <th className="px-4 py-2 border">Exp. LC</th>
                  <th className="px-4 py-2 border">Ven. LC</th>
                  <th className="px-4 py-2 border">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Conductores.map((conductor) => (
                  <tr key={conductor.ID_Conductor} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border"> {conductor.ID_Conductor}</td>
                    <td className="px-4 py-2 border">{conductor.nombre}</td>
                    <td className="px-4 py-2 border">{conductor.apellido}</td>
                    <td className="px-4 py-2 border">{conductor.telefono}</td>
                    <td className="px-4 py-2 border">{conductor.fechaExp}</td>
                    <td className="px-4 py-2 border">{conductor.fechaVen}</td>
                    <td className="px-4 py-2 border flex gap-2 justify-center">
                      <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 transition">
                        <Link to="/actualizarC">✏️</Link>
                      </button>
                      <button
                      onClick={() => handleDelete(conductor.ID_Conductor)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
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

export default Conductores;
