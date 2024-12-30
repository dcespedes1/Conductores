import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const ConductoresData = [
  {
    id: 1012602034,
    nombre: 'Marcos Fidel',
    apellido: 'Suarez',
    telefono: '3204479019',
    expLC: '2024-01-15',
    venLC: '2024-01-15',
    clase: 'text-orange-500 font-bold'
  },
  {
    id: 1028702740,
    nombre: 'Daniel',
    apellido: 'Cespedes',
    telefono: '3204472020',
    expLC: '2024-02-15',
    venLC: '2025-02-15',
    clase: 'text-green-500 font-bold'
  }
];

const Conductores = () => {
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
        <main className="bg-white rounded-lg shadow-lg p-6">
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-40 mx-auto mb-6 rounded-lg"
          />
          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-[#2c3e50] mb-4">
            Inventario de Conductores
          </h1>
          {/* Add Button */}
          <div className="flex justify-end mb-4">
            <button className="bg-[#30884B] text-white px-4 py-2 rounded-md hover:bg-[#26703A] transition">
              <Link to="/AgregarC">Agregar</Link>
            </button>
          </div>
          {/* Conductores Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
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
                {ConductoresData.map((conductor) => (
                  <tr key={conductor.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{conductor.id}</td>
                    <td className="px-4 py-2 border">{conductor.nombre}</td>
                    <td className="px-4 py-2 border">{conductor.apellido}</td>
                    <td className="px-4 py-2 border">{conductor.telefono}</td>
                    <td className="px-4 py-2 border">{conductor.expLC}</td>
                    <td className={`px-4 py-2 border ${conductor.clase}`}>{conductor.venLC}</td>
                    <td className="px-4 py-2 border flex gap-2 justify-center">
                      <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 transition">
                        <Link to="/actualizarC">✏️</Link>
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">
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
