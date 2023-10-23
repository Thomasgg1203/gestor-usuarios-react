import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Card'
import UserForm from './components/UserForm'

function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  console.log(usuarios)
  return (
    <div style={{marginTop: '10%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
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
