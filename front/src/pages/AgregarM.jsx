import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/Logo.png";
import axios from "axios";

const URI = "http://localhost:3000/api/movil";

const AgregarM = () => {
  const [ID_Movil, setMovil] = useState('');
  const [Placa, setPlaca] = useState('');
  const [T_vinculación, setT_Vinculacion] = useState('');
  const [RTM, setRTM] = useState('');
  const [Exp_RTM, setExp_RTM] = useState('');
  const [Ven_RTM, setVen_RTM] = useState('');
  const [RCC, setRCC] = useState('');
  const [Exp_RCC, setExp_RCC] = useState('');
  const [Ven_RCC, setVen_RCC] = useState('');
  const [RCE, setRCE] = useState('');
  const [Exp_RCE, setExp_RCE] = useState('');
  const [Ven_RCE, setVen_RCE] = useState('');
  const [SOAT, setSOAT] = useState('');
  const [Exp_SOAT, setExp_SOAT] = useState('');
  const [Ven_SOAT, setVen_SOAT] = useState('');
  const [Exp_Operacion, setExp_Operacion] = useState('');
  const [Ven_Operacion, setVen_Operacion] = useState('');
  const [Exp_Transito, setExp_Transito] = useState('');
  const [Ven_Transito, setVen_Transito] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(URI, {
        ID_Movil,
        Placa,
        T_vinculación,
        RTM,
        Exp_RTM,
        Ven_RTM,
        RCC,
        Exp_RCC,
        Ven_RCC,
        RCE,
        Exp_RCE,
        Ven_RCE,
        SOAT,
        Exp_SOAT,
        Ven_SOAT,
        Exp_Operacion,
        Ven_Operacion,
        Exp_Transito,
        Ven_Transito,
      });
      console.log('respuesta del servidor:', response.data);
      navigate('/moviles');
    } catch (error) {
      console.error("Error al agregar el móvil:", error.response || error);
      alert(`Hubo un error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="bg-[#fffef2] min-h-screen flex flex-col items-center justify-center pt-16">
      <nav className="fixed top-0 left-0 w-full flex justify-around items-center py-2 bg-transparent z-10">
        <Link to="/HomeA" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">🏡</Link>
        <Link to="/Conductores" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">👮</Link>
        <Link to="/Ipreoperacional" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">🔧</Link>
        <Link to="/moviles" className="text-2xl text-white flex justify-center items-center w-12 h-12 rounded-full hover:bg-[#30884B] transition">🚌</Link>
      </nav>

      <div className="mb-8">
        <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg"/>
      </div>

      <div className="bg-white w-full max-w-md p-6 border-2 border-[#30884B] rounded-lg shadow-md">
        <form onSubmit={store}>
          {/* Móvil */}
          <div className="mb-4">
            <label htmlFor="ID_Movil" className="block text-sm font-bold text-black mb-2">Móvil</label>
            <input
              type="text"
              id="ID_Movil"
              value={ID_Movil}
              onChange={(e) => setMovil(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Placa */}
          <div className="mb-4">
            <label htmlFor="Placa" className="block text-sm font-bold text-black mb-2">Placa</label>
            <input
              type="text"
              id="Placa"
              value={Placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* T. Vinculación */}
          <div className="mb-4">
            <label htmlFor="T_vinculación" className="block text-sm font-bold text-black mb-2">T. Vinculación</label>
            <input
              type="text"
              id="T_vinculación"
              value={T_vinculación}
              onChange={(e) => setT_Vinculacion(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* RTM */}
          <div className="mb-4">
            <label htmlFor="RTM" className="block text-sm font-bold text-black mb-2">RTM</label>
            <input
              type="text"
              id="RTM"
              value={RTM}
              onChange={(e) => setRTM(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. RTM */}
          <div className="mb-4">
            <label htmlFor="Exp_RTM" className="block text-sm font-bold text-black mb-2">Exp. RTM</label>
            <input
              type="date"
              id="Exp_RTM"
              value={Exp_RTM}
              onChange={(e) => setExp_RTM(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. RTM */}
          <div className="mb-4">
            <label htmlFor="Ven_RTM" className="block text-sm font-bold text-black mb-2">Ven. RTM</label>
            <input
              type="date"
              id="Ven_RTM"
              value={Ven_RTM}
              onChange={(e) => setVen_RTM(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* RCC */}
          <div className="mb-4">
            <label htmlFor="RCC" className="block text-sm font-bold text-black mb-2">RCC</label>
            <input
              type="text"
              id="RCC"
              value={RCC}
              onChange={(e) => setRCC(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. RCC */}
          <div className="mb-4">
            <label htmlFor="Exp_RCC" className="block text-sm font-bold text-black mb-2">Exp. RCC</label>
            <input
              type="date"
              id="Exp_RCC"
              value={Exp_RCC}
              onChange={(e) => setExp_RCC(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. RCC */}
          <div className="mb-4">
            <label htmlFor="Ven_RCC" className="block text-sm font-bold text-black mb-2">Ven. RCC</label>
            <input
              type="date"
              id="date"
              value={Ven_RCC}
              onChange={(e) => setVen_RCC(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* RCE */}
          <div className="mb-4">
            <label htmlFor="RCE" className="block text-sm font-bold text-black mb-2">RCE</label>
            <input
              type="text"
              id="RCE"
              value={RCE}
              onChange={(e) => setRCE(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. RCE */}
          <div className="mb-4">
            <label htmlFor="Exp_RCE" className="block text-sm font-bold text-black mb-2">Exp. RCE</label>
            <input
              type="date"
              id="Exp_RCE"
              value={Exp_RCE}
              onChange={(e) => setExp_RCE(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. RCE */}
          <div className="mb-4">
            <label htmlFor="Ven_RCE" className="block text-sm font-bold text-black mb-2">Ven. RCE</label>
            <input
              type="date"
              id="Ven_RCE"
              value={Ven_RCE}
              onChange={(e) => setVen_RCE(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* SOAT */}
          <div className="mb-4">
            <label htmlFor="SOAT" className="block text-sm font-bold text-black mb-2">SOAT</label>
            <input
              type="text"
              id="SOAT"
              value={SOAT}
              onChange={(e) => setSOAT(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. SOAT */}
          <div className="mb-4">
            <label htmlFor="Exp_SOAT" className="block text-sm font-bold text-black mb-2">Exp. SOAT</label>
            <input
              type="date"
              id="Exp_SOAT"
              value={Exp_SOAT}
              onChange={(e) => setExp_SOAT(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. SOAT */}
          <div className="mb-4">
            <label htmlFor="Ven_SOAT" className="block text-sm font-bold text-black mb-2">Ven. SOAT</label>
            <input
              type="date"
              id="Ven_SOAT"
              value={Ven_SOAT}
              onChange={(e) => setVen_SOAT(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. Operación */}
          <div className="mb-4">
            <label htmlFor="Exp_Operacion" className="block text-sm font-bold text-black mb-2">Exp. Operación</label>
            <input
              type="date"
              id="Exp_Operacion"
              value={Exp_Operacion}
              onChange={(e) => setExp_Operacion(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. Operación */}
          <div className="mb-4">
            <label htmlFor="Ven_Operacion" className="block text-sm font-bold text-black mb-2">Ven. Operación</label>
            <input
              type="date"
              id="Ven_Operacion"
              value={Ven_Operacion}
              onChange={(e) => setVen_Operacion(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Exp. Tránsito */}
          <div className="mb-4">
            <label htmlFor="Exp_Transito" className="block text-sm font-bold text-black mb-2">Exp. Tránsito</label>
            <input
              type="date"
              id="Exp_Transito"
              value={Exp_Transito}
              onChange={(e) => setExp_Transito(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Ven. Tránsito */}
          <div className="mb-4">
            <label htmlFor="Ven_Transito" className="block text-sm font-bold text-black mb-2">Ven. Tránsito</label>
            <input
              type="date"
              id="Ven_Transito"
              value={Ven_Transito}
              onChange={(e) => setVen_Transito(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>

          {/* Botón de Enviar */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-[#30884B] text-white font-bold rounded-md hover:bg-[#276b3b] transition">
              Agregar Móvil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarM;
