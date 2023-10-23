import { useState } from "react"

const useFormurario = (inicial) => {
    //definiendo los estados
    const [formulario, setFormulario] = useState(inicial)

    //el que guarda los valores del formulario
    const handleChange = (e) => {
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
    }
    const reset = () => {
        setFormulario(inicial)
    }

    return [formulario, handleChange, reset]
}


export default useFormurario
