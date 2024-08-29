import * as Yup from 'yup'

export const initialValuesFilter = {
  destinyCheck: false,
  destiny: '',

  departureDateCheck: false,
  departureDate1: '',
  departureDate2: '',

  typeDestinyCheck: false,
  typeDestiny: '',

  typeTripCheck: false,
  typeTrip: ''
}

export const validationSchemaFilter = Yup.object({
  destiny: Yup.string().test(
    'is-required',
    'O campo é obrigatório',
    function (value) {
      const { destinyCheck } = this.parent
      return !destinyCheck || !!value
    }
  ),

  typeDestiny: Yup.string().test(
    'is-required',
    'O campo é obrigatório',
    function (value) {
      const { typeDestinyCheck } = this.parent
      return !typeDestinyCheck || !!value
    }
  ),

  typeTrip: Yup.string().test(
    'is-required',
    'O campo é obrigatório',
    function (value) {
      const { typeTripCheck } = this.parent
      return !typeTripCheck || !!value
    }
  ),

  departureDate1: Yup.date().test(
    'is-required',
    'O campo é obrigatório',
    function (value) {
      const { departureDateCheck } = this.parent
      return !departureDateCheck || !!value
    }
  ),

  departureDate2: Yup.date()
    .nullable()
    .test('is-required', 'O campo é obrigatório', function (value) {
      const { departureDateCheck, departureDate1 } = this.parent

      if (departureDateCheck) {
        if (!value) {
          return this.createError({
            message: 'O campo é obrigatório',
            path: 'departureDate2'
          })
        }

        if (new Date(value) < new Date(departureDate1)) {
          return this.createError({
            message: 'A data não pode ser menor que a data inicial',
            path: 'departureDate2'
          })
        }
      }

      return true
    })
})
