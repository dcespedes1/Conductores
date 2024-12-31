import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/Logo.png";
import axios from "axios";

const URI = "http://localhost:3000/api/Conductor";

function AgregarC() {
  const [ID_Conductor, setId_Conductor] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [telefono, settelefono] = useState("");
  const [fechaExp, setfechaExp] = useState("");
  const [fechaVen, setfechaVen] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!ID_Conductor || !nombre || !apellido || !telefono || !fechaExp || !fechaVen) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log({
      ID_Conductor,
      nombre,
      apellido,
      telefono,
      fechaExp,
      fechaVen,
    });
    try {
      const response = await axios.post(URI, {
        ID_Conductor,
        nombre,
        apellido,
        telefono,
        fechaExp,
        fechaVen,
      });

      // Verificar si la respuesta fue exitosa
      if (response.status === 201) {
        console.log('Conductor agregado correctamente:', response.data);
        navigate('/Conductores'); // Redirigir a la lista de conductores
      } else {
        console.error('Error al agregar conductor:', response);
      }
    } catch (error) {
      console.error("Error al agregar conductor:", error);
      alert("Hubo un problema al agregar el conductor. Intenta nuevamente.");
    }
  };

  return (
    <div className="bg-[#fffef2] min-h-screen flex flex-col items-center justify-center pt-16">
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

      <div className="mb-8">
        <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
      </div>

      <div className="bg-white w-full max-w-md p-6 border-2 border-[#30884B] rounded-lg shadow-md">
        <form onSubmit={store}>
          <div className="mb-4">
            <label htmlFor="ID_Conductor" className="block text-sm font-bold text-black mb-2">Número de identificación</label>
            <input
              type="text"
              id="ID_Conductor"
              value={ID_Conductor}
              onChange={(e) => setId_Conductor(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-bold text-black mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setnombre(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="apellido" className="block text-sm font-bold text-black mb-2">Apellido</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setapellido(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefono" className="block text-sm font-bold text-black mb-2">Telefono</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => settelefono(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fechaExp" className="block text-sm font-bold text-black mb-2">Fecha expedición licencia de conducción</label>
            <input
              type="date"
              id="fechaExp"
              value={fechaExp}
              onChange={(e) => setfechaExp(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fechaVen" className="block text-sm font-bold text-black mb-2">Fecha vencimiento licencia de conducción</label>
            <input
              type="date"
              id="fechaVen"
              value={fechaVen}
              onChange={(e) => setfechaVen(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-[#30884B] text-white px-6 py-2 rounded-md hover:bg-[#26703A] transition">
              Agregar Conductor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarC;
