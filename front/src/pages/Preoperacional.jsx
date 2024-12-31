import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png';
import axios from 'axios';

const URI = 'http://localhost:3000/api/preoperacional';

const Preoperacional = () => {
  const [ID_Movil, setID_Movil] = useState('');
  const [fecha_act, setFecha_act] = useState('');
  const [Pito, setPito] = useState('');
  const [Luz_Reversa, setLuz_reversa] = useState('');
  const [Luces, setLuces] = useState('');
  const [Direccionales, setDireccionales] = useState('');
  const [Nivel_FLuido, setNivel_FLuidos] = useState('');
  const [Fuga_Fluido, setFuga_Fluidos] = useState('');
  const [Novedad_piezas, setNovedad_piezas] = useState('');
  const [Novedad_encendido, setNovedad_encendido] = useState('');
  const [Kilometraje, setKilometraje] = useState('');
  const [Sueño, setSueño] = useState('');
  const [Kit, setKit] = useState('');
  const [carroceria, setCarroceria] = useState('');
  const [Botiquin, setBotiquin] = useState('');
  const [Interior, setInterior] = useState('');
  const [Llantas, setLlantas] = useState('');
  const [Luz_Parqueo, setLuz_Parqueo] = useState('');
  const [Horas_manejando, setHoras_Manejando] = useState('');
  const [Vision, setVision] = useState('');
  const [pausas, setPausas] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [Inicio, setInicio] = useState('');
  const [ID_Conductor, setID_Conductor] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URI, {
        ID_Movil,
        fecha_act,
        Pito,
        Luz_Reversa,
        Luces,
        Direccionales,
        Nivel_FLuido,
        Fuga_Fluido,
        Novedad_piezas,
        Novedad_encendido,
        Kilometraje,
        Sueño,
        Kit,
        carroceria,
        Botiquin,
        Interior,
        Llantas,
        Luz_Parqueo,
        Horas_manejando,
        Vision,
        pausas,
        sintomas,
        Inicio,
        ID_Conductor,
        image,
      });
      if (response && response.data) {
        console.log('Respuesta del servidor:', response.data);
        navigate('/home');
      } else {
        console.error('La respuesta no contiene datos válidos:', response);
      }
    } catch (error) {
      if (error.response) {
        // Manejo de errores del servidor
        console.error('Error del servidor:', error.response.data);
      } else {
        // Otros errores (como problemas de red)
        console.error('Error:', error.message);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffef2] px-5">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-3 z-10">
        <button className="text-xl text-white">
          <Link to="/home" className="no-underline text-white">🏡</Link>
        </button>
      </div>
      {/* Logo */}
      <div className="my-5">
        <img src={Logo} alt="Logo" className="h-20 w-20 object-contain rounded-lg" />
      </div>
      {/* Form */}
      <div className="w-full max-w-lg bg-transparent rounded-lg shadow-md p-5">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-5">Preoperacional</h2>
        <form onSubmit={store}>
          {/* Campos del formulario */}
          <div className="mb-5">
            <label htmlFor="ID_Movil" className="block text-sm font-bold text-black mb-2">ID Movil</label>
            <input
              type="text"
              id='ID_Movil'
              name="ID_Movil"
              value={ID_Movil}
              onChange={(e) => setID_Movil(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="fecha_act" className="block text-sm font-bold text-black mb-2">Fecha</label>
            <input
              type="date"
              id='fecha_act'
              name="fecha_act"
              value={fecha_act}
              onChange={(e) => setFecha_act(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Pito" className="block text-sm font-bold text-black mb-2">Pito</label>
            <input
              type="text"
              id='Pito'
              name="Pito"
              value={Pito}
              onChange={(e) => setPito(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Luz_reversa" className="block text-sm font-bold text-black mb-2">Luz Reversa</label>
            <input
              type="text"
              id='Luz_reversa'
              name="Luz_reversa"
              value={Luz_Reversa}
              onChange={(e) => setLuz_reversa(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Luces" className="block text-sm font-bold text-black mb-2">Luces</label>
            <input
              type="text"
              id='Luces'
              name="Luces"
              value={Luces}
              onChange={(e) => setLuces(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Direccionales" className="block text-sm font-bold text-black mb-2">Direccionales</label>
            <input
              type="text"
              id='Direccionales'
              name="Direccionales"
              value={Direccionales}
              onChange={(e) => setDireccionales(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="nivel_FLuidos" className="block text-sm font-bold text-black mb-2">Nivel de Fluidos</label>
            <input
              type="text"
              id='nivel_FLuidos'
              name="nivel_FLuidos"
              value={Nivel_FLuido}
              onChange={(e) => setNivel_FLuidos(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Fuga_Fluidos" className="block text-sm font-bold text-black mb-2">Fuga de Fluidos</label>
            <input
              type="text"
              id='Fuga_Fluidos'
              name="Fuga_Fluidos"
              value={Fuga_Fluido}
              onChange={(e) => setFuga_Fluidos(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Novedad_piezas" className="block text-sm font-bold text-black mb-2">Novedad en Piezas</label>
            <input
              type="text"
              id='Novedad_piezas'
              name="Novedad_piezas"
              value={Novedad_piezas}
              onChange={(e) => setNovedad_piezas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Novedad_encendido" className="block text-sm font-bold text-black mb-2">Novedad_encendido</label>
            <input
              type="text"
              id='Novedad_encendido'
              name="Novedad_encendido"
              value={Novedad_encendido}
              onChange={(e) => setNovedad_encendido(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Kilometraje" className="block text-sm font-bold text-black mb-2">Kilometraje</label>
            <input
              type="text"
              id='Kilometraje'
              name="Kilometraje"
              value={Kilometraje}
              onChange={(e) => setKilometraje(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Sueño" className="block text-sm font-bold text-black mb-2">Sueño</label>
            <input
              type="text"
              id='Sueño'
              name="Sueño"
              value={Sueño}
              onChange={(e) => setSueño(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Kit" className="block text-sm font-bold text-black mb-2">Kit</label>
            <input
              type="text"
              id='Kit'
              name="Kit"
              value={Kit}
              onChange={(e) => setKit(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="carroceria" className="block text-sm font-bold text-black mb-2">Carrocería</label>
            <input
              type="text"
              id='carroceria'
              name="carroceria"
              value={carroceria}
              onChange={(e) => setCarroceria(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Botiquin" className="block text-sm font-bold text-black mb-2">Botiquín</label>
            <input
              type="text"
              id='Botiquin'
              name="Botiquin"
              value={Botiquin}
              onChange={(e) => setBotiquin(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Interior" className="block text-sm font-bold text-black mb-2">Interior</label>
            <input
              type="text"
              id='Interior'
              name="Interior"
              value={Interior}
              onChange={(e) => setInterior(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Llantas" className="block text-sm font-bold text-black mb-2">Llantas</label>
            <input
              type="text"
              id='Llantas'
              name="Llantas"
              value={Llantas}
              onChange={(e) => setLlantas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Luz_Parqueo" className="block text-sm font-bold text-black mb-2">Luz de Parqueo</label>
            <input
              type="text"
              id='Luz_Parqueo'
              name="Luz_Parqueo"
              value={Luz_Parqueo}
              onChange={(e) => setLuz_Parqueo(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Horas_Manejando" className="block text-sm font-bold text-black mb-2">Horas Manejando</label>
            <input
              type="text"
              id='Horas_Manejando'
              name="Horas_Manejando"
              value={Horas_manejando}
              onChange={(e) => setHoras_Manejando(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="vision" className="block text-sm font-bold text-black mb-2">Visión</label>
            <input
              type="text"
              id='vision'
              name="vision"
              value={Vision}
              onChange={(e) => setVision(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="pausas" className="block text-sm font-bold text-black mb-2">Pausas</label>
            <input
              type="text"
              id='pausas'
              name="pausas"
              value={pausas}
              onChange={(e) => setPausas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-sm font-bold text-black mb-2">Síntomas</label>
            <input
              type="text"
              id='sintomas'
              name="sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="ID_Conductor" className="block text-sm font-bold text-black mb-2">ID Conductor</label>
            <input
              type="text"
              id='ID_Conductor'
              name="ID_Conductor"
              value={ID_Conductor}
              onChange={(e) => setID_Conductor(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block text-sm font-bold text-black mb-2">Imagen</label>
            <input
              type="text"
              id='image'
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          <div>
            <label htmlFor="Inicio" className="block text-sm font-bold text-black mb-2">Inicio</label>
            <input
              type="date"
              id='Inicio'
              name="Inicio"
              value={Inicio}
              onChange={(e) => setInicio(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            />
          </div>
          {/* Botón de envío */}
          <div className="flex justify-between gap-2">
          <button type="submit" className="flex-1 py-2 text-center bg-[#30884B] text-white rounded hover:bg-gray-700">
                Registrarse
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preoperacional;
