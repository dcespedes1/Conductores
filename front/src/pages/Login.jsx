import React, { useState } from 'react';

const URI = 'http://localhost:3000/api/movil/login';
const URI2 = 'http://localhost:3000/api/admin/login';

function Login() {
  const [ID_Movil, setMovil] = useState('');

  const [Placa, setPlaca] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateFormAdmin = () => {
    // Aquí podrías agregar validaciones específicas para identificar si es un admin
    const isAdminFormat = false;  // Ejemplo: ADMIN-123
    return isAdminFormat;
  };

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

    const isAdmin = validateFormAdmin();
    const url = isAdmin ? URI2 : URI;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          [isAdmin ? 'ID' : 'ID_Movil']: ID_Movil,
          [isAdmin ? 'contrasena' : 'Placa']: Placa 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (isAdmin) {
          localStorage.setItem('ID', ID_Movil);
          window.location.href = '/HomeA';
        } else {
          localStorage.setItem('ID_Movil', ID_Movil);
          window.location.href = '/Home';
        }
        console.log('Inicio de sesión exitoso:', data);
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
        <img src="/api/placeholder/160/160" alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
      </div>
      <form
        className="bg-white w-72 p-5 border-2 border-green-600 rounded-lg shadow-lg text-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="ID_Movil"
          placeholder="Ingrese Móvil"
          value={ID_Movil}
          onChange={(e) => setMovil(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          id="Placa"
          placeholder="Placa"
          value={Placa}
          onChange={(e) => setPlaca(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="flex justify-between gap-2">
          <button
            type="button"
            onClick={() => window.location.href = '/registro'}
            className="flex-1 p-2 bg-green-600 text-white text-center rounded hover:bg-green-700"
          >
            Registrarse
          </button>
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