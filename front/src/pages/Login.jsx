import React, { useState } from 'react';
import Logo from '../img/Logo.png';

const URI = 'http://localhost:3000/api/movil/login';
const URI2 = 'http://localhost:3000/api/admin/login';

function Login() {
  const [ID_Movil, setMovil] = useState('');
  const [Placa, setPlaca] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para validar si es un administrador
  const validateFormAdmin = () => {
    // Verifica si el ID comienza con "ADMIN-" seguido de números
    const adminPattern = /^ADMIN-\d+$/;
    return adminPattern.test(ID_Movil);
  };

  // Función para validar el formato de la placa
  const validatePlaca = (placa) => {
    // Formato típico de placa: ABC-123 o ABC123
    const placaPattern = /^[A-Z]{3}[-]?\d{3}$/;
    return placaPattern.test(placa);
  };

  // Función para validar el ID del móvil
  const validateMovilID = (id) => {
    if (validateFormAdmin()) {
      // Si es admin, ya validamos el formato en validateFormAdmin()
      return true;
    }
    // Para usuarios normales, el ID debe ser numérico y tener entre 4 y 6 dígitos
    const movilPattern = /^\d{4,6}$/;
    return movilPattern.test(id);
  };

  const validateForm = () => {
    // Limpia el mensaje de error anterior
    setErrorMessage(null);

    // Valida que los campos no estén vacíos
    if (!ID_Movil || !Placa) {
      setErrorMessage('Todos los campos son obligatorios');
      return false;
    }

    // Valida el formato del ID
    if (!validateMovilID(ID_Movil)) {
      setErrorMessage('El ID Móvil debe tener entre 4 y 6 dígitos, o el formato ADMIN-XXX para administradores');
      return false;
    }

    // Valida el formato de la placa
    if (!validatePlaca(Placa)) {
      setErrorMessage('La placa debe tener el formato ABC-123 o ABC123');
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
          [isAdmin ? 'nombre' : 'ID_Movil']: ID_Movil,
          [isAdmin ? 'contraseña' : 'Placa']: Placa 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (isAdmin) {
          localStorage.setItem('nombre', ID_Movil);
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
        <img src={Logo} alt="Logo" className="w-40 mx-auto mb-6 rounded-lg" />
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
          onChange={(e) => setMovil(e.target.value.toUpperCase())}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          id="Placa"
          placeholder="Placa"
          value={Placa}
          onChange={(e) => setPlaca(e.target.value.toUpperCase())}
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