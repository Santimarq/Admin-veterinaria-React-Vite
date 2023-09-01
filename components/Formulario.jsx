import {useState , useEffect} from 'react';
import Error from './Error';

    
const Formulario = ({ pacientes , setPacientes , paciente , setPaciente}) => {

    const [nombre , setNombre] = useState('');
    const [dueño , setDueño] = useState('');
    const [email , setEmail] = useState('');
    const [fecha , setFecha] = useState('');
    const [sintomas , setSintomas] = useState('');
    // State de error
    const [error , setError] = useState(false);

  // Aplicando useEffect 
  useEffect ( () => {
    if(Object.keys(paciente).length > 0) {
     setNombre(paciente.nombre)
     setDueño(paciente.dueño)
     setEmail(paciente.email)
     setFecha(paciente.fecha)
     setSintomas(paciente.sintomas)
    }
  } , [paciente]);






    // Id unico de pacientes
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validación de form
      if (!nombre || !dueño || !email || !fecha || !sintomas) {
        setError(true);
        return;
      }
    
      setError(false);

      // Objeto con los datos de  pacientes 
      const objetoPaciente = {
          nombre,
          dueño,
          email,
          fecha,
          sintomas,
          id: generarId()
      }

      if( paciente.id) {
        // Editando Paciente
        objetoPaciente.id = paciente.id;
       // console.log(objetoPaciente);
        //console.log(paciente);

        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id 
          === paciente.id ? objetoPaciente : pacienteState)

          setPacientes(pacientesActualizados)
          setPacientes({})
      }else{
        // Nuevo Paciente
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      } 
      
    

     // Reiniciar el form 
     setNombre('')
     setDueño('')
     setEmail('')
     setFecha('')
     setSintomas('')


    }


  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5  ">
        <h2 className="font-black  text-3xl text-center">Seguimientos de Pacientes </h2>


        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes {""} y 
            <span className="text-indigo-600 font-bold "> Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5  mb-10">
          
          {error &&  <Error  mensaje = 'Todos los campos son obligatorios' />     }

              <div className="mb-5"> 
                 <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold"> Nombre Mascota</label>

                 <input id="mascota" type="text" placeholder="Nombre" 
                 value={nombre}
                 
                 onChange={(e) => setNombre(e.target.value)}
                 className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"/>
                 

                </div> 


                <div className="mb-5"> 
                 <label htmlFor="dueño" className="block text-gray-700 uppercase font-bold"> Nombre Dueño Mascota</label>

                 <input id="dueño" type="text" placeholder="Nombre Del Dueño"
                  value={dueño}
                  onChange={(e) => setDueño(e.target.value)}
                 className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"/>

                </div> 


                <div className="mb-5"> 
                 <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Email de Dueño Mascota</label>

                 <input id="email" type="email" placeholder="Email Del Dueño" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"/>

                </div> 


                <div className="mb-5"> 
                 <label htmlFor="alta" className="block text-gray-700 uppercase font-bold"> Fecha de Alta Paciente</label>

                 <input id="alta" type="date"  
                 value={fecha}
                 onChange={(e) => setFecha(e.target.value)}
                 className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"/>

                </div>   


                <div className="mb-5"> 
                 <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Sintomas del Paciente</label>

                <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
                    placeholder="Sintomas del Paciente"
                    value={sintomas}
                 onChange={(e) => setSintomas(e.target.value)}
                />

                </div>   
 
            <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
             hover:bg-indigo-700 cursor-pointer transition-all"
            value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
             />


        </form>

    </div>
  )
}

export default Formulario
