import * as Yup from 'yup'

import { arrayUsersName } from '..'

export const initialValuesRegister = {
  userName: '',
  userPassword: '',
  confirmPassword: ''
}

export const initialValuesLogin = {
  userName: '',
  userPassword: ''
}

export const validationSchemaRegister = (users: User[] | undefined) => {
  return Yup.object({
    userName: Yup.string()
      .required('O campo é obrigatorio')
      .test(
        'not-in-array',
        'Este nome de usuário já está em uso',
        function (value) {
          const existingUserNames = arrayUsersName(users)
          return !existingUserNames.includes(value || '')
        }
      ),

    userPassword: Yup.string()
      .min(8, 'O campo presisa ter no minimo 8 caracteres')
      .required('o campo é obrigatorio'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('userPassword')], 'As senhas são diferentes')
      .required('o campo é obrigatorio')
  })
}

export const validationSchemaLogin = (users: User[] | undefined) => {
  return Yup.object({
    userName: Yup.string()
      .required('O campo é obrigatorio')
      .test('in-array', 'Este nome de usuário inexistente', function (value) {
        const existingUserNames = arrayUsersName(users)
        return existingUserNames.includes(value || '')
      }),

    userPassword: Yup.string()
      .required('O campo é obrigatorio')
      .test('Password', 'Senha incorreta', function (value) {
        const { userName } = this.parent
        if (users) {
          const user = users.find((user) => user.user === userName)
          return user ? user.password === value : false
        }
        return false
      })
  })
}
