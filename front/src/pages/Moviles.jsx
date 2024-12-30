import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/Logo.png";

const Moviles = () => {
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
            Inventario de Móviles
          </h1>
          {/* Button to add a new mobile */}
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition block ml-auto mb-4">
            <Link to="/agregarM">Agregar</Link>
          </button>
          {/* Inventory Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
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
                  <th className="px-4 py-2 border">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">0030</td>
                  <td className="px-4 py-2 border">ABC123</td>
                  <td className="px-4 py-2 border">Propio</td>
                  <td className="px-4 py-2 border">123456</td>
                  <td className="px-4 py-2 border">2024-01-15</td>
                  <td className="px-4 py-2 border text-orange-500">2024-01-15</td>
                  <td className="px-4 py-2 border">789012</td>
                  <td className="px-4 py-2 border">2024-02-20</td>
                  <td className="px-4 py-2 border text-green-500">2025-02-20</td>
                  <td className="px-4 py-2 border">345678</td>
                  <td className="px-4 py-2 border">2023-12-10</td>
                  <td className="px-4 py-2 border text-red-500">2023-12-10</td>
                  <td className="px-4 py-2 border">901234</td>
                  <td className="px-4 py-2 border">2024-03-05</td>
                  <td className="px-4 py-2 border text-green-500">2025-03-05</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400 transition">
                      <a href="ActualizarB.html">✏️</a>
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400 transition">
                      🗑️
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">0287</td>
                  <td className="px-4 py-2 border">XYZ789</td>
                  <td className="px-4 py-2 border">Arrendado</td>
                  <td className="px-4 py-2 border">567890</td>
                  <td className="px-4 py-2 border">2024-02-15</td>
                  <td className="px-4 py-2 border text-green-500">2025-02-15</td>
                  <td className="px-4 py-2 border">123456</td>
                  <td className="px-4 py-2 border">2024-01-10</td>
                  <td className="px-4 py-2 border text-orange-500">2024-01-10</td>
                  <td className="px-4 py-2 border">789012</td>
                  <td className="px-4 py-2 border">2024-03-20</td>
                  <td className="px-4 py-2 border text-green-500">2025-03-20</td>
                  <td className="px-4 py-2 border">345678</td>
                  <td className="px-4 py-2 border">2024-04-05</td>
                  <td className="px-4 py-2 border text-green-500">2025-04-05</td>
                  <td className="px-4 py-2 border flex gap-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400 transition">
                      <Link to="/ActualizarB">✏️</Link>
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400 transition">
                      🗑️
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Moviles;
