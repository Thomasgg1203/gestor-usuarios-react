import Input from './Input'
import Button from './Button'
import useFormurario from '../hooks/useFormurario'

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormurario({
        name: '',
        lastName: '',
        email: '',
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
      }

    return(
        <form onSubmit={handleSubmit}>
              <Input
                label='Name'
                name='name'
                placeholder="Name"
                value={formulario.name}
                onChange={handleChange}
              />
              <Input
                label='Last Name'
                name='lastName'
                placeholder="Last Name"
                value={formulario.lastName}
                onChange={handleChange}
              />
              <Input
                label='Email'
                name='email'
                placeholder="Email"
                value={formulario.email}
                onChange={handleChange}
              />
              <Button>
                Enviar
              </Button>
            </form>
    )
}
export default UserForm
