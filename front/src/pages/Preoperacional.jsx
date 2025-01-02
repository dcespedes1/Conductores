import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    const fechaActual = new Date().toISOString().split('T')[0];
    setFecha_act(fechaActual);
  } , []);
    useEffect(() => {
      // Recuperamos el ID_Movil desde localStorage
      const movilIDStored = localStorage.getItem('ID_Movil');
      setID_Movil(movilIDStored);  // Guardamos el valor del ID_Movil en el estado
    }, []);
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
            <label htmlFor="fecha_act" className="block text-sm font-bold text-black mb-2">Fecha actual</label>
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
            <label htmlFor="Pito" className="block text-sm font-bold text-black mb-2">Indique en general el estado del funcionamiento del pito</label>
            <select
              id='Pito'
              name="Pito"
              value={Pito}
              onChange={(e) => setPito(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
            required 
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Funciona">Funciona</option>
              <option value="No funciona">No funciona</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Luz_reversa" className="block text-sm font-bold text-black mb-2">Indique en general el estado del funcionamiento de
               la Luz y alarma de reversa</label>
            <select
              id='Luz_reversa'
              name="Luz_reversa"
              value={Luz_Reversa}
              onChange={(e) => setLuz_reversa(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Funcional">Funcional</option>
              <option value="No funcional">No funcional</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Luces" className="block text-sm font-bold text-black mb-2">Indique en general el estado del funcionamiento de las luces</label>
            <select          
              id='Luces'
              name="Luces"
              value={Luces}
              onChange={(e) => setLuces(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Funcional">Funcional</option>
              <option value="No funcional">No funcional</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Direccionales" className="block text-sm font-bold text-black mb-2">Indique en general el estado del funcionamiento de las direccionales</label>
            <select
              id='Direccionales'
              name="Direccionales"
              value={Direccionales}
              onChange={(e) => setDireccionales(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Funcional">Funcional</option>
              <option value="No funcional">No funcional</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="nivel_FLuidos" className="block text-sm font-bold text-black mb-2">¿Los niveles de los fluidos, de los sistemas del vehículo, son adecuados?</label>
            <select
              id='nivel_FLuidos'
              name="nivel_FLuidos"
              value={Nivel_FLuido}
              onChange={(e) => setNivel_FLuidos(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Altos">altos</option>
              <option value="Medios">Medios</option>
              <option value="Bajos">Bajos</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Fuga_Fluidos" className="block text-sm font-bold text-black mb-2">¿Observó alguna fuga de algún fluido?</label>
            <select
              id='Fuga_Fluidos'
              name="Fuga_Fluidos"
              value={Fuga_Fluido}
              onChange={(e) => setFuga_Fluidos(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            >   <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Novedad_piezas" className="block text-sm font-bold text-black mb-2">¿Observó novedad en alguna pieza, dispositivo o sistema en general?</label>
            <select
              id='Novedad_piezas'
              name="Novedad_piezas"
              value={Novedad_piezas}
              onChange={(e) => setNovedad_piezas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Sin novedad</option>
              <option value="No">piezas desgastadas</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Novedad_encendido" className="block text-sm font-bold text-black mb-2">¿Se presentó novedad en el encendido del vehículo?</label>
            <select
              id='Novedad_encendido'
              name="Novedad_encendido"
              value={Novedad_encendido}
              onChange={(e) => setNovedad_encendido(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Dificultad</option>
              <option value="No">Todo correcto</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Kilometraje" className="block text-sm font-bold text-black mb-2">Kilometraje</label>
            <input
              type="text"
              id='Kilometraje'
              name="Kilometraje"
              value={Kilometraje}
              onChange={(e) =>{ 
              const value = e.target.value;
                if (/^\d*$/.test(value)) {
                setKilometraje(value);
                }
              }} 
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Sueño" className="block text-sm font-bold text-black mb-2">¿Cuántas horas durmió la noche anterior?</label>
            <select
              id='Sueño'
              name="Sueño"
              value={Sueño}
              onChange={(e) => setSueño(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="4 horas">4 horas</option>
              <option value="6 horas">6 horas</option>
              <option value="8 horas">8 horas</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Kit" className="block text-sm font-bold text-black mb-2">Cuenta con extintor, kit de carretera completo y vigente</label>
            <input
              type="text"
              id='Kit'
              name="Kit"
              value={Kit}
              onChange={(e) => setKit(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="carroceria" className="block text-sm font-bold text-black mb-2">Observa novedad en la carrocería o en los accesorios externos del vehículo (espejos, vidrios, calcomanías, pintura en general)</label>
            <input
              type='text'
              id='carroceria'
              name="carroceria"
              value={carroceria}
              onChange={(e) => setCarroceria(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Botiquin" className="block text-sm font-bold text-black mb-2">Cuenta con botiquín completo y vigente</label>
            <input
              type='text'
              id='Botiquin'
              name="Botiquin"
              value={Botiquin}
              onChange={(e) => setBotiquin(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Interior" className="block text-sm font-bold text-black mb-2">Observa novedad en el interior del vehículo (sillas, cinturones, vidrios, entre otros)</label>
            <input
              type='text'
              id='Interior'
              name="Interior"
              value={Interior}
              onChange={(e) => setInterior(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="Llantas" className="block text-sm font-bold text-black mb-2">Según su observación, cual considera que es el nivel de desgaste de las llantas</label>
            <select
              id='Llantas'
              name="Llantas"
              value={Llantas}
              onChange={(e) => setLlantas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Bueno">Bueno</option>
              <option value="Regular">Regular</option>
              <option value="Malo">Malo</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Luz_Parqueo" className="block text-sm font-bold text-black mb-2">Indique en general el estado del funcionamiento de las Luces de Parqueo</label>
            <select
              id='Luz_Parqueo'
              name="Luz_Parqueo"
              value={Luz_Parqueo}
              onChange={(e) => setLuz_Parqueo(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Funcional">Funcional</option>
              <option value="No funcional">No funcional</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="Horas_Manejando" className="block text-sm font-bold text-black mb-2">¿Cuántas horas condujo, de manera contínua, el día anterior?</label>
            <select
              id='Horas_Manejando'
              name="Horas_Manejando"
              value={Horas_manejando}
              onChange={(e) => setHoras_Manejando(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            >
               <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Menos de 4 horas">Menos de 4 horas</option>
              <option value="Entre 4 y 6 horas">Entre 4 y 6 horas</option>
              <option value="Más de 6 horas">Más de 6 horas</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="vision" className="block text-sm font-bold text-black mb-2">¿Ha tenido visión borrosa o dificultad al concentrarse en un punto fijo ?</label>
            <select
              id='vision'
              name="vision"
              value={Vision}
              onChange={(e) => setVision(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="pausas" className="block text-sm font-bold text-black mb-2">Realizó pausas activas dentro de su jornada</label>
            <select
              id='pausas'
              name="pausas"
              value={pausas}
              onChange={(e) => setPausas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-sm font-bold text-black mb-2">¿Presenta síntomas de agotamiento o cansancio ?</label>
            <select
              id='sintomas'
              name="sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            > 
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="ID_Conductor" className="block text-sm font-bold text-black mb-2">Número de identificación</label>
            <input
              type="text"
              id="ID_Conductor"
              name="ID_Conductor"
              value={ID_Conductor}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 10) {
                  setID_Conductor(value);
                }
              }}
              maxLength={10}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="block text-sm font-bold text-black mb-2">Tome foto</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              capture="environment"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setImage(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
            />
          </div>
          <div>
            <label htmlFor="Inicio" className="block text-sm font-bold text-black mb-2">Digite la hora de inicio del recorrido</label>
            <input
              type="time"
              id='Inicio'
              name="Inicio"
              value={Inicio}
              onChange={(e) => setInicio(e.target.value)}
              className="w-full px-4 py-2 border border-[#30884B] rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#30884B]"
              required
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