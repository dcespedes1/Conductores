import React from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

const HomeA = () => {
  return (
    <div className="flex flex-col items-center bg-[#fffef2] min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center py-2 bg-transparent z-10">
        <Link
          to="/Login"
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
      <img src={Logo} alt="Logo" className="h-20 w-20 object-contain mb-4 mt-20" />
      {/* Main Content */}
      <div className="container flex flex-col items-center justify-center mt-24 w-full max-w-md p-6 bg-white border-2 border-[#30884B] rounded-lg shadow-lg">
        <main className="text-center">
          {/* Title */}
          <h1 className="text-xl font-bold text-gray-800 mb-6">
            Bienvenido Administrador
          </h1>
          {/* Buttons */}
          <button className="w-full bg-[#30884B] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#256639] transition mb-4">
            <Link to="/Moviles" className="block">
              Inventario de Móviles
            </Link>
          </button>
          <button className="w-full bg-[#30884B] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#256639] transition mb-4">
            <Link to="/conductores" className="block">
              Inventario de Conductores
            </Link>
          </button>
          <button className="w-full bg-[#30884B] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#256639] transition">
            <Link to="/Ipreoperacional" className="block">
              Inventario Preoperacional
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
};

export default HomeA;
