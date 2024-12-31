import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../img/Logo.png";
import axios from "axios";

const URI = "http://localhost:3000/api/Conductor";

function Register ()  {
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
      if (response.status === 200 || response.status === 201) {
        console.log('Conductor agregado correctamente:', response.data);
        navigate('/Login'); // Redirigir a la lista de conductores
      } else {
        console.error('Error al agregar conductor:', response);
      }
    }catch (error) {
    console.error("Error al agregar conductor:", error);
    alert("Conductor ya registrado");
  }
};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffef2]">
      <h1 className="text-2xl font-bold mb-6">Registrarse</h1>
      <div className="mb-6">
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
          <div className="flex justify-between gap-2">
              <button type="submit" className="flex-1 py-2 text-center bg-[#30884B] text-white rounded hover:bg-gray-700">
                Registrarse
              </button>
              <Link to="/Login" className="flex-1 p-2 bg-gray-800 text-white text-center rounded hover:bg-gray-900">
                ya tengo cuenta
              </Link>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Register;
