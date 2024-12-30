import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";

const AgregarC = () => {
  return (
    <div className="bg-[#fffef2] min-h-screen flex flex-col items-center justify-center pt-16">
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
      <div className="mb-8">
<img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg"/>
      </div>

      <div className="bg-white w-full max-w-md p-6 border-2 border-[#30884B] rounded-lg shadow-md">
        <form>
          {[
            { id: "ID", label: "Número de identificación" },
            { id: "Nombre", label: "Nombre" },
            { id: "Apellido", label: "Apellido" },
            { id: "Exp. LC", label: "Exp. LC" },
            { id: "Ven. LC", label: "Ven. LC" },
          ].map((field) => (
            <div className="mb-4" key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-bold text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.id}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#30884B] focus:border-transparent"
              />
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <Link
              to="/Conductores"
              className="bg-[#30884B] text-white px-6 py-2 rounded-md hover:bg-[#26703A] transition"
            >
              Agregar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarC;
