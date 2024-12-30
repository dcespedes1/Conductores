import React, {useState, useEffect} from "react";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

const BienvenidaMovil = () => {
  const [ID_Movil, setID_Movil] = useState(null);

  useEffect(() => {
    // Recuperamos el ID_Movil desde localStorage
    const movilIDStored = localStorage.getItem('ID_Movil');
    setID_Movil(movilIDStored);  // Guardamos el valor del ID_Movil en el estado
  }, []);
  return (
    <div className="flex flex-col items-center bg-[#fffef2] min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-3 z-10">
              <button className="text-xl text-white">
                <Link to="/Login" className="no-underline text-white">🏡</Link>
              </button>
            </div>
<img src={Logo} alt="Logo" className="h-20 w-20 object-contain mb-4 mt-20" />
      {/* Main Content */}
      <div className="container flex flex-col items-center justify-center mt-24 w-full max-w-md p-6 bg-transparent border-2 border-[#30884B] rounded-lg shadow-lg">
        <main className="text-center">
          {/* Title */}
          <h1 className="text-2xl font-extrabold text-gray-800 mb-6">
          {ID_Movil ? `Bienvenido Móvil ${ID_Movil}` : 'Cargando...'}
          </h1>
          {/* Button */}
          <button className="w-full bg-[#30884B] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#256639] transition">
            <Link to="/preoperacional" className="block">
              Iniciar Inspección Preoperacional
            </Link>
          </button>
        </main>
      </div>
    </div>
  );
};

export default BienvenidaMovil;
