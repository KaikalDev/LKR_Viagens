import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'

import { Container } from './styles'
import Button from '../../component/Button'

import { useGetUsersQuery, usePostUserMutation } from '../../services/api'
import * as Utils from '../../utils/validationSchemas/register'

type TypeForm = {
  type: 'register' | 'login'
}

const FormRegister = () => {
  const navigate = useNavigate()

  const [formActive, setFormActive] = useState<TypeForm>({ type: 'login' })

  const { data: users, refetch } = useGetUsersQuery()
  const [purchase] = usePostUserMutation()

  const arrayUsersName = () => {
    const array: string[] = []
    if (users) {
      users.map((user) => array.push(user.user))
    }
    return array
  }

  const getUser = () => {
    return users?.find((user) => user.user === LoginForm.values.userName)
  }

  const ResgisterForm = useFormik({
    initialValues: Utils.initialValuesRegister,
    validationSchema: Utils.validationSchemaRegister(users),
    onSubmit: async (values) => {
      const existingUserNames = arrayUsersName()
      const userId = existingUserNames.length + 1

      await purchase({
        password: values.userPassword,
        user: values.userName,
        userId: `${userId}`
      })

      refetch()
      setFormActive({ type: 'login' })
    }
  })

  const LoginForm = useFormik({
    initialValues: Utils.initialValuesLogin,
    validationSchema: Utils.validationSchemaLogin(users),
    onSubmit: () => {
      const user = getUser()

      if (user) {
        navigate(`/users/${user.userId}/trips/`)
      }
    }
  })

  return (
    <Container>
      {formActive.type === 'login' ? (
        <form onSubmit={LoginForm.handleSubmit}>
          <div>
            <label htmlFor="">Nome de usuario</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={LoginForm.handleChange}
              value={LoginForm.values.userName}
              className={LoginForm.errors.userName ? 'error' : ''}
            />
            <small>{LoginForm.errors.userName}</small>
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              onChange={LoginForm.handleChange}
              value={LoginForm.values.userPassword}
              className={LoginForm.errors.userPassword ? 'error' : ''}
            />
            <small>{LoginForm.errors.userPassword}</small>
          </div>
          <div className="buttons">
            <Button title="Clique aqui para fazer login" type="submit">
              Login
            </Button>
            <Button
              onClick={() => setFormActive({ type: 'register' })}
              type="link"
              title="Clique aqui para cadastrar"
            >
              Ainda não possui um cadastro?
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={ResgisterForm.handleSubmit}>
          <div>
            <label htmlFor="userName">Nome de usuario</label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={ResgisterForm.handleChange}
              value={ResgisterForm.values.userName}
              className={ResgisterForm.errors.userName ? 'error' : ''}
            />
            <small>{ResgisterForm.errors.userName}</small>
          </div>
          <div>
            <label htmlFor="userPassword">Senha</label>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              onChange={ResgisterForm.handleChange}
              value={ResgisterForm.values.userPassword}
              className={ResgisterForm.errors.userPassword ? 'error' : ''}
            />
            <small>{ResgisterForm.errors.userPassword}</small>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirme a senha</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={ResgisterForm.handleChange}
              value={ResgisterForm.values.confirmPassword}
              className={ResgisterForm.errors.confirmPassword ? 'error' : ''}
            />
            <small>{ResgisterForm.errors.confirmPassword}</small>
          </div>
          <div className="buttons">
            <Button title="Clique aqui para cadastrar" type="submit">
              Cadastrar
            </Button>
            <Button
              onClick={() => setFormActive({ type: 'login' })}
              type="link"
              title="Clique aqui para fazer login"
            >
              Já possui um cadastro?
            </Button>
          </div>
        </form>
      )}
    </Container>
  )
}

export default FormRegister
