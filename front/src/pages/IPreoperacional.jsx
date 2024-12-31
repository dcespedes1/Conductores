import React, {useState, useEffect} from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const URI = "http://localhost:3000/api/preoperacional";

function IPreoperacional () {
  const [preoperacional, setPreoperacional] = useState([]);

  useEffect(() => {
    getPreoperacional();
  }, []);

  const getPreoperacional = async () => {
    try {
      const res = await axios.get(URI);
      setPreoperacional(res.data);
    } catch (error) {
      console.error("Error al obtener los datos del inventario preoperacional:", error);
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
            <table className="bg-white table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#30884B] text-white sticky top-0">
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">ID_Movil</th>
                  <th className="px-4 py-2 border">fecha_act</th>
                  <th className="px-4 py-2 border">Pito</th>
                  <th className="px-4 py-2 border">Luz_Reversa</th>
                  <th className="px-4 py-2 border">Luces</th>
                  <th className="px-4 py-2 border">Direccionales</th>
                  <th className="px-4 py-2 border">Nivel Fluido</th>
                  <th className="px-4 py-2 border">Fuga Fluido</th>
                  <th className="px-4 py-2 border">Novedad Piezas</th>
                  <th className="px-4 py-2 border">Novedad Encendido</th>
                  <th className="px-4 py-2 border">Kilometraje</th>
                  <th className="px-4 py-2 border">Sueño</th>
                  <th className="px-4 py-2 border">Kit</th>
                  <th className="px-4 py-2 border">Carrocería</th>
                  <th className="px-4 py-2 border">Botiquín</th>
                  <th className="px-4 py-2 border">Interior</th>
                  <th className="px-4 py-2 border">Llantas</th>
                  <th className="px-4 py-2 border">Luz Parqueo</th>
                  <th className="px-4 py-2 border">Horas Manejando</th>
                  <th className="px-4 py-2 border">Visión</th>
                  <th className="px-4 py-2 border">Pausas</th>
                  <th className="px-4 py-2 border">Síntomas</th>
                  <th className="px-4 py-2 border">Inicio</th>
                  <th className="px-4 py-2 border">ID Conductor</th>
                  <th className="px-4 py-2 border">Nombre conductor</th>
                  <th className="px-4 py-2 border">Imagen</th>
                </tr>
              </thead>
              <tbody>
                {preoperacional.map((preoperacional, _index ) => (
                <tr key={preoperacional.ID} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{preoperacional.ID}</td>
                  <td className="px-4 py-2 border"> {preoperacional.ID_Movil} </td>
                  <td className="px-4 py-2 border">{preoperacional.fecha_act}</td>
                  <td className="px-4 py-2 border">{preoperacional.Pito}</td>
                  <td className="px-4 py-2 border">{preoperacional.Luz_Reversa}</td>
                  <td className="px-4 py-2 border"> {preoperacional.Luces} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Direccionales} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Nivel_FLuido} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Fuga_Fluido} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Novedad_piezas} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Novedad_encendido} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Kilometraje} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Sueño} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Kit} </td>
                  <td className="px-4 py-2 border">{preoperacional.carroceria} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Botiquin} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Interior} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Llantas} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Luz_Parqueo} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Horas_manejando} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Vision} </td>
                  <td className="px-4 py-2 border"> {preoperacional.pausas} </td>
                  <td className="px-4 py-2 border"> {preoperacional.sintomas} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Inicio} </td>
                  <td className="px-4 py-2 border"> {preoperacional.ID_Conductor} </td>
                  <td className="px-4 py-2 border"> {preoperacional.Conductor.nombre} </td>
                  <td className="px-4 py-2 border"> {preoperacional.imagen} </td>
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

export default IPreoperacional;
