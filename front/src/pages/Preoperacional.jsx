import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.png';

const Preoperacional = () => {
  const fields = [
    { id: 'movil', label: 'Móvil' },
    { id: 'fecha', label: 'Fecha Hoy' },
    { id: 'conductor', label: 'Nombre del Conductor' },
    { id: 'pito', label: 'Pito y volante' },
    { id: 'luz_reversa', label: 'Luz y alarma de Reversa' },
    { id: 'luces', label: 'Luces' },
    { id: 'direccionales', label: 'Direccionales' },
    { id: 'nivel_fluido', label: 'Nivel de fluido' },
    { id: 'fuga_fluido', label: 'Fuga en fluidos' },
    { id: 'novedad_piezas', label: 'Novedad en piezas' },
    { id: 'novedad_encendido', label: 'Novedad en encendido' },
    { id: 'kilometraje', label: 'Kilometraje' },
    { id: 'sueno', label: 'Últimas horas de sueño' },
    { id: 'kit', label: 'Kit de carretera completo' },
    { id: 'carroceria', label: 'Novedad en Carrocería' },
    { id: 'botiquin', label: 'Botiquín' },
    { id: 'interior', label: 'Calidad de interior' },
    { id: 'llantas', label: 'Calidad en llantas' },
    { id: 'luz_parqueo', label: 'Calidad luz de Parqueo' },
    { id: 'horas_manejando', label: 'Últimas horas manejando' },
    { id: 'vision', label: 'Calidad de visión' },
    { id: 'pausas', label: 'Realizó pausas activas dentro de su jornada' },
    { id: 'sintomas', label: 'Presenta síntomas' },
    { id: 'inicio', label: 'Hora de inicio' },
  ];

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

      {/* Form Container */}
      <div className="bg-white w-full max-w-4xl p-6 border-2 border-green-600 rounded-md shadow-md">
        <form action="#" method="post">
          {/* Form Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="block text-sm font-bold text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  id={field.id}
                  name={field.id}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}

            {/* Photo Upload */}
            <div className="flex flex-col">
              <label htmlFor="photo" className="block text-sm font-bold text-gray-700 mb-1">
                Tomar Foto
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                capture="camera"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <a
              href="/home"
              className="px-5 py-2 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-700"
            >
              Enviar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preoperacional;
