import { useState } from "react"
import Card from "./Card"
import Form from "./Form"


const initialValues = []
let uniqueId = 0

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

const [animales, setAnimales] = useState(initialValues)

  function handleAnimal(animal){
    console.log(animal)
    const animalNuevo = {
      id: uniqueId++,
      nombre: animal.nombre,
      class: animal.clase,
    }
    const animalesActualizados = [...animales]
    animalesActualizados.push(animalNuevo)
    setAnimales(animalesActualizados)
  }

  return (
    <div className="App">
      <h1>App de animales</h1>
      <Form onAnimal={handleAnimal}/>
      {animales.map((animal) => {
        return (
        <Card
        key={animal.id}
        animal={animal}
        />
        )
      })}
    </div>
  );
}

export default App;
