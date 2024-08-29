import { useState } from 'react'

import { FormContainer } from '../../styles'
import Button from '../../component/Button'
import { Container } from './styles'

import FormAdd from '../formAdd'
import FormFilter from '../formFilter'

const ButtonsContainer = () => {
  const [form, setForm] = useState({
    isActive: false,
    type: 'add'
  })

  return (
    <>
      <Container>
        <Button
          type="button"
          title="Clique aqui para adicionar viagem"
          onClick={() => setForm({ isActive: !form.isActive, type: 'add' })}
        >
          Adicionar Viagem +
        </Button>
        <Button
          type="button"
          title="Clique aqui para adicionar um filtro as listas"
          onClick={() => setForm({ isActive: !form.isActive, type: 'filter' })}
        >
          Adicionar Filtros
        </Button>
      </Container>
      {form.isActive && (
        <div
          className="overlay"
          onClick={() => setForm({ isActive: false, type: form.type })}
        />
      )}
      <FormContainer className={form.isActive ? 'is-active' : ''}>
        {form.type === 'add' && <FormAdd />}
        {form.type === 'filter' && <FormFilter />}
      </FormContainer>
    </>
  )
}

export default ButtonsContainer
