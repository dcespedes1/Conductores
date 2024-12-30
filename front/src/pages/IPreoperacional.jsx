import React from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

const IPreoperacional = () => {
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
            Inventario Preoperacional
          </h1>
          {/* Inventory Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#30884B] text-white sticky top-0">
                  <th className="px-4 py-2 border">ID Móvil</th>
                  <th className="px-4 py-2 border">Pito</th>
                  <th className="px-4 py-2 border">Luz Reversa</th>
                  <th className="px-4 py-2 border">Luces</th>
                  <th className="px-4 py-2 border">Direccionales</th>
                  <th className="px-4 py-2 border">Nivel Fluido</th>
                  <th className="px-4 py-2 border">Fuga Fluido</th>
                  <th className="px-4 py-2 border">Novedad Piezas</th>
                  <th className="px-4 py-2 border">Novedad Encendido</th>
                  <th className="px-4 py-2 border">Sueño</th>
                  <th className="px-4 py-2 border">Kit</th>
                  <th className="px-4 py-2 border">Carrocería</th>
                  <th className="px-4 py-2 border">Botiquín</th>
                  <th className="px-4 py-2 border">Interior</th>
                  <th className="px-4 py-2 border">Llantas</th>
                  <th className="px-4 py-2 border">Luz Parqueo</th>
                  <th className="px-4 py-2 border">Horas Manejando</th>
                  <th className="px-4 py-2 border">Visión</th>
                  <th className="px-4 py-2 border">Inicio</th>
                  <th className="px-4 py-2 border">ID Conductor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">126</td>
                  <td className="px-4 py-2 border">Ok</td>
                  <td className="px-4 py-2 border">Funciona</td>
                  <td className="px-4 py-2 border">Todas</td>
                  <td className="px-4 py-2 border">Derecha</td>
                  <td className="px-4 py-2 border">Lleno</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">Encendido</td>
                  <td className="px-4 py-2 border">00:15:00</td>
                  <td className="px-4 py-2 border">Completo</td>
                  <td className="px-4 py-2 border">Buen estado</td>
                  <td className="px-4 py-2 border">Completo</td>
                  <td className="px-4 py-2 border">Normal</td>
                  <td className="px-4 py-2 border">Desinflada</td>
                  <td className="px-4 py-2 border">Funciona</td>
                  <td className="px-4 py-2 border">02:00</td>
                  <td className="px-4 py-2 border">Normal</td>
                  <td className="px-4 py-2 border">2024-01-01 08:00:00</td>
                  <td className="px-4 py-2 border">1011011010</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">30</td>
                  <td className="px-4 py-2 border">No</td>
                  <td className="px-4 py-2 border">No funciona</td>
                  <td className="px-4 py-2 border">Malas</td>
                  <td className="px-4 py-2 border">Izquierda</td>
                  <td className="px-4 py-2 border">Medio</td>
                  <td className="px-4 py-2 border">Sí</td>
                  <td className="px-4 py-2 border">Falta pieza</td>
                  <td className="px-4 py-2 border">No enciende</td>
                  <td className="px-4 py-2 border">01:00:00</td>
                  <td className="px-4 py-2 border">Faltante</td>
                  <td className="px-4 py-2 border">Dañada</td>
                  <td className="px-4 py-2 border">Incompleto</td>
                  <td className="px-4 py-2 border">Normal</td>
                  <td className="px-4 py-2 border">Desinflada</td>
                  <td className="px-4 py-2 border">No funciona</td>
                  <td className="px-4 py-2 border">03:00</td>
                  <td className="px-4 py-2 border">Mala</td>
                  <td className="px-4 py-2 border">2024-01-02 09:00:00</td>
                  <td className="px-4 py-2 border">2022022020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IPreoperacional;
