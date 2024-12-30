import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../img/Logo.png";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffef2]">
      <h1 className="text-2xl font-bold mb-6">Registrarse</h1>
      <div className="mb-6">
        <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
      </div>
      <div className="bg-white w-80 p-6 border-2 border-[#30884B] rounded-lg shadow-md text-center">
        <input
          type="text"
          placeholder="Número identificación"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="date"
          placeholder="Expedición Licencia"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <input
          type="date"
          placeholder="Vencimiento Licencia"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#30884B]"
        />
        <div className="flex justify-between gap-4">
          <Link
            to="/Login"
            className="flex-1 py-2 text-center bg-[#30884B] text-white rounded hover:bg-gray-700"
          >
            ¡Ya me registré!
          </Link>
          <Link
            to="/Login"
            className="flex-1 p-2 bg-gray-800 text-white text-center rounded hover:bg-gray-900"
            >
            Registrarse
          </Link>
            
        </div>
      </div>
    </div>
  );
};

export default Register;
