

const Paciente = ({paciente , setPaciente , eliminarPaciente}) => {

    // Destructuring 
    const {nombre , dueño , email , fecha , sintomas  , id}  = paciente


    // Function para eliminar paciente
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente');

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    
  return (
    
    <div className=" mx-5 my-10 bg-white shadow-md  px-5 py-10 rounded-xl"> 

    <p className=" font-bold mb-3 text-indigo-700 uppercase"> 
        Nombre: {''}
        <span className="font-normal text-black normal-case">{nombre}</span>
    </p>

    <p className=" font-bold mb-3 text-indigo-700 uppercase"> 
        Dueño: {''}
        <span className="font-normal text-black normal-case">{dueño}</span>
    </p> 

    <p className=" font-bold mb-3 text-indigo-700 uppercase"> 
        Email: {''}
        <span className="font-normal text-black  normal-case">{email}</span>
    </p>

    <p className=" font-bold mb-3 text-indigo-700 uppercase"> 
        Fecha Alta: {''}
        <span className="font-normal text-black  normal-case"> {fecha}</span>
    </p>

    <p className=" font-bold mb-3 text-indigo-700 uppercase"> 
        Sintomas: {''}
        <span className="font-normal text-black  normal-case"> {sintomas}</span>
    </p>

    <div className="flex justify-between  mt-10"> 

 <button type="button" className="py-1 px-7 
  bg-indigo-600 hover:bg-indigo-700 text-white font-bold
   uppercase rounded-lg "
   onClick={() => setPaciente(paciente)} > Editar </button>

        <button type="button" className="py-1 px-7 
  bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg "
  onClick={handleEliminar}
  > Eliminar</button>
    
    </div>


</div>



  )
}

export default Paciente
