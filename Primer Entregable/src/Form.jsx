import { useState } from "react"

function Form(props){

    const [nombre, setNombre] = useState("")
    const [clase, setClase] = useState("")
    const [error, setError] = useState()

    function handleChangeNombre(e){
        setNombre(e.target.value)
    }
    
    function handleChangeClase(e){
        setClase(e.target.value)
    }

    const validarNombre = (nombre) => {
        const withoutSpaces = nombre.trim();
        if (withoutSpaces.length > 2) {
            return true;
        } else {
            return false;
        }
    };
    const validarClase = (clase) => {
        const withoutSpaces = clase.trim();
        const claseAsArray = withoutSpaces.split("");
        const hasNumber = claseAsArray.some((character) => {
            if (isNaN(character)) {
                return false;
            } else {
                return true;
            }
        });
        if (withoutSpaces.length > 5 && hasNumber) {
            return true;
        } else {
            return false;
        }
    };

    function handleSubmit(e){
        e.preventDefault()
        if (!nombre || !clase){
            console.error("Por favor, llene todos los datos")
            setError("Por favor, llene todos los datos")
            return
        }
        setError()
        const isNombreValid = validarNombre(nombre);
        const isClaseValid = validarClase(clase);
        if (!isClaseValid || !isNombreValid) {
            setError("Por favor chequea que la información sea correcta");
            return
        }
        props.onAnimal(nombre)
        props.onAnimal(clase)
    }
    
    return (
        <>
        <h2>Ingresa un animal y su clase</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Animal</label>
            <input type="text" id="nombre" value={nombre} onChange={handleChangeNombre}/>
            <label htmlFor="clase">Clase</label>
            <input type="text" id="clase" value={clase} onChange={handleChangeClase}/>
            <button type="submit">Enviar</button>
            {error && <p>{error}</p>}
        </form>
        </>
    )
}
export default Form