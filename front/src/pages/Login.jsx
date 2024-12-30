import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fffef2]">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
      <div className="flex justify-center items-center w-20 h-20 mb-5">
        <img src={Logo} alt="Logo" className="h-10 mr-2" />
      </div>
      <div className="bg-white w-72 p-5 border-2 border-green-600 rounded-lg shadow-lg text-center">
        <input
          type="text"
          placeholder="Ingrese Movil"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Placa"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex justify-between gap-2">
          <Link
            to="/registro"
            className="flex-1 p-2 bg-green-600 text-white text-center rounded hover:bg-green-700"
          >
            Registrarse
          </Link>
          <Link
            to="/home"
            className="flex-1 p-2 bg-gray-800 text-white text-center rounded hover:bg-gray-900"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
