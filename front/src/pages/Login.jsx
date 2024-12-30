import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/Logo.png';

const URI = 'http://localhost:3000/api/movil/login';

function Login() {
  const [ID_Movil, setMovil] = useState('');
  const [Placa, setPlaca] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!ID_Movil || !Placa) {
      setErrorMessage('Todos los campos son obligatorios');
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setLoading(true);
  
    if (!validateForm()) {
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch(URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID_Movil, Placa }),  // Pasamos los datos del formulario
      });
  
      if (response.ok) {
        const data = await response.json();
        // Guardamos el ID_Movil en localStorage para usarlo más tarde
        localStorage.setItem('ID_Movil', ID_Movil);  // Guardamos el ID_Movil en localStorage
        console.log('Inicio de sesión exitoso:', data);
        navigate('/Home');  // Redirige a la página de bienvenida
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Datos no compatibles');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      setErrorMessage('Hubo un error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fffef2]">
      <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
      <div className="flex justify-center items-center w-20 h-20 mb-5">
        <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
      </div>
      <form
        className="bg-white w-72 p-5 border-2 border-green-600 rounded-lg shadow-lg text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Ingrese Movil"
          value={ID_Movil}
          onChange={(e) => setMovil(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          placeholder="Placa"
          value={Placa}
          onChange={(e) => setPlaca(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="flex justify-between gap-2">
          <Link
            to="/registro"
            className="flex-1 p-2 bg-green-600 text-white text-center rounded hover:bg-green-700"
          >
            Registrarse
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 p-2 bg-gray-800 text-white text-center rounded hover:bg-gray-900"
          >
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
