import { useState } from 'react'
import useFormurario from './hooks/useFormurario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Card'
import Button from './components/Button'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormurario({
    name: '',
    lastName: '',
    email: '',
  })

  const submit = (e) => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }
  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
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
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(u =>
              <li key={u.email} >
                {`${u.name} -- ${u.lastName} -- ${u.email}`}
              </li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
