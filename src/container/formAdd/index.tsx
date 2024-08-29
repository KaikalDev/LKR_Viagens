import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'

import Button from '../../component/Button'
import { Container } from './styles'

import { RootReducer } from '../../Store'
import { IdParams } from '../CardsList'

import * as Utils from '../../utils/validationSchemas/Add'
import { usePostTripMutation } from '../../services/api'
import { add } from '../../Store/reducers/trip'
import { getDescription } from '../../utils'

const FormAdd = () => {
  const { user_id } = useParams() as IdParams
  const dispatch = useDispatch()

  const { trips } = useSelector((state: RootReducer) => state.trip)

  const [purchase] = usePostTripMutation()

  const form = useFormik({
    initialValues: Utils.initialValuesAdd,
    validationSchema: Utils.validationSchemaAdd,
    onSubmit: (values) => {
      const typeDestiny =
        values.typeDestiny === 'internacional' ? 'internacional' : 'nacional'
      const typeTrip = values.typeTrip === 'trabalho' ? 'trabalho' : 'lazer'

      if (!values.description) {
        values.description = getDescription({
          typeDestiny,
          typeTrip,
          departureDate: values.departureDate,
          destiny: values.destiny,
          returnDate: values.returnDate
        })
      }

      purchase({
        departureDate: values.departureDate,
        description: values.description,
        destiny: values.destiny,
        typeDestiny,
        typeTrip,
        returnDate: values.returnDate,
        userId: user_id,
        id: trips.length + 1
      })

      dispatch(
        add({
          departureDate: values.departureDate,
          description: values.description,
          destiny: values.destiny,
          typeDestiny,
          typeTrip,
          returnDate: values.returnDate,
          userId: user_id,
          id: trips.length + 1
        })
      )
    }
  })

  return (
    <Container>
      <form onSubmit={form.handleSubmit}>
        <div>
          <label htmlFor="destiny">Destino: </label>
          <input
            id="destiny"
            name="destiny"
            type="text"
            onChange={form.handleChange}
            value={form.values.destiny}
            className={form.errors.destiny ? 'error' : ''}
          />
        </div>
        <small>{form.errors.destiny}</small>
        <div>
          <label htmlFor="departureDate">data de partida: </label>
          <input
            id="departureDate"
            name="departureDate"
            type="date"
            onChange={form.handleChange}
            value={form.values.departureDate}
            className={form.errors.departureDate ? 'error' : ''}
          />
        </div>
        <small>{form.errors.departureDate}</small>
        <div>
          <label htmlFor="returnDate">data de retorno: </label>
          <input
            id="returnDate"
            name="returnDate"
            type="date"
            onChange={form.handleChange}
            value={form.values.returnDate}
            className={form.errors.returnDate ? 'error' : ''}
          />
        </div>
        <small>{form.errors.returnDate}</small>
        <div>
          <select
            id="typeDestiny"
            name="typeDestiny"
            onChange={form.handleChange}
            value={form.values.typeDestiny}
            className={form.errors.typeDestiny ? 'error' : ''}
          >
            <option></option>
            <option value="nacional">Nacional</option>
            <option value="internacional">Intenacional</option>
          </select>
          <select
            id="typeTrip"
            name="typeTrip"
            onChange={form.handleChange}
            value={form.values.typeTrip}
            className={form.errors.typeTrip ? 'error' : ''}
          >
            <option></option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
          </select>
        </div>
        <small>
          {form.errors.typeTrip || form.errors.typeDestiny
            ? form.errors.typeTrip
            : ''}
        </small>
        <div>
          <label htmlFor="description">
            Descrição: <small>(Opicional)</small>{' '}
          </label>
          <textarea
            id="description"
            name="description"
            onChange={form.handleChange}
            value={form.values.description}
            className={form.errors.description ? 'error' : ''}
          />
        </div>
        <small>{form.errors.description}</small>
        <Button
          variant="secondary"
          type="submit"
          title="Clique aqui para adicionar um item"
        >
          Adicionar
        </Button>
      </form>
    </Container>
  )
}

export default FormAdd
