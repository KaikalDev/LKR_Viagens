import * as Yup from 'yup'

export const initialValuesAdd = {
  destiny: '',
  departureDate: '',
  returnDate: '',
  typeDestiny: '',
  typeTrip: '',
  description: ''
}

export const validationSchemaAdd = Yup.object({
  departureDate: Yup.date().required('o campo é obrigatorio'),

  returnDate: Yup.date()
    .min(
      Yup.ref('departureDate'),
      'A data de retorno não pode ser anterior à data de partida'
    )
    .required('o campo é obrigatorio'),

  destiny: Yup.string()
    .min(4, 'O campo presisa ter no minimo 4 digitos')
    .required('o campo é obrigatorio'),

  typeDestiny: Yup.string().required('O campo é obrigatório'),

  typeTrip: Yup.string().required('O campo é obrigatório'),

  description: Yup.string().min(
    5,
    'A descrição precisa ter no minimo 5 digitos'
  )
})
