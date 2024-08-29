import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { useState } from 'react'

import { Container } from './styles'
import Button from '../../component/Button'

import { IdParams } from '../CardsList'
import { RootReducer } from '../../Store'

import * as Utils from '../../utils/validationSchemas/Filter'
import { filter, setTrips } from '../../Store/reducers/trip'
import { useGetTripsQuery } from '../../services/api'

const FormFilter = () => {
  const { user_id } = useParams() as IdParams
  const dispatch = useDispatch()

  const { trips } = useSelector((state: RootReducer) => state.trip)
  const [firstFilterApplied, setFirstFilterApplied] = useState(false)

  const { data } = useGetTripsQuery(user_id)

  const getDestinys = () => {
    const arrayTrips: string[] = ['']
    if (trips) {
      trips.forEach((trip) => {
        if (!arrayTrips.includes(trip.destiny)) {
          arrayTrips.push(trip.destiny)
        }
      })
    }
    return arrayTrips
  }

  const handleFilter = () => {
    const checked: boolean =
      form.values.departureDateCheck ||
      form.values.destinyCheck ||
      form.values.typeDestinyCheck ||
      form.values.typeTripCheck

    return !checked && firstFilterApplied
  }

  const form = useFormik({
    initialValues: Utils.initialValuesFilter,
    validationSchema: Utils.validationSchemaFilter,
    onSubmit: (values) => {
      if (data) {
        dispatch(setTrips(data))
      }
      dispatch(filter(values))
      setFirstFilterApplied(true)
      form.resetForm({ values: Utils.initialValuesFilter })
    }
  })

  return (
    <Container>
      <form onSubmit={form.handleSubmit}>
        <ul>
          <li>
            <div className="checkBox">
              <input
                id="destinyCheck"
                name="destinyCheck"
                type="checkbox"
                className="checkbox"
                onChange={(e) =>
                  form.setFieldValue('destinyCheck', e.target.checked)
                }
                checked={form.values.destinyCheck}
              />
              <label htmlFor="destinyCheck">Filtrar por destino: </label>
            </div>
            <select
              disabled={!form.values.destinyCheck}
              id="destiny"
              name="destiny"
              onChange={form.handleChange}
              value={form.values.destiny}
              className={form.errors.destiny ? 'error' : ''}
              title={form.errors.destiny}
            >
              {getDestinys().map((destiny, index) => (
                <option key={index} value={destiny}>
                  {destiny}
                </option>
              ))}
            </select>
          </li>
          <li>
            <div className="checkBox">
              <input
                id="departureDateCheck"
                name="departureDateCheck"
                type="checkbox"
                className="checkbox"
                onChange={(e) =>
                  form.setFieldValue('departureDateCheck', e.target.checked)
                }
                checked={form.values.departureDateCheck}
              />
              <label htmlFor="departureDateCheck">
                Filtrar data de partida:{' '}
              </label>
            </div>
            <div className="duo">
              <input
                disabled={!form.values.departureDateCheck}
                id="departureDate1"
                name="departureDate1"
                type="date"
                onChange={form.handleChange}
                value={form.values.departureDate1}
                className={form.errors.departureDate1 ? 'error' : ''}
                title={form.errors.departureDate1}
              />
              <input
                disabled={!form.values.departureDateCheck}
                id="departureDate2"
                name="departureDate2"
                type="date"
                onChange={form.handleChange}
                value={form.values.departureDate2}
                className={form.errors.departureDate2 ? 'error' : ''}
                title={form.errors.departureDate2}
              />
            </div>
          </li>
          <li>
            <div className="checkBox">
              <input
                id="typeDestinyCheck"
                name="typeDestinyCheck"
                type="checkbox"
                className="checkbox"
                onChange={(e) =>
                  form.setFieldValue('typeDestinyCheck', e.target.checked)
                }
                checked={form.values.typeDestinyCheck}
              />
              <label htmlFor="typeDestinyCheck">
                Filtrar por tipo de destino:{' '}
              </label>
            </div>
            <select
              disabled={!form.values.typeDestinyCheck}
              id="typeDestiny"
              name="typeDestiny"
              onChange={form.handleChange}
              value={form.values.typeDestiny}
              className={form.errors.typeDestiny ? 'error' : ''}
            >
              <option></option>
              <option value="nacional">Nacional</option>
              <option value="internacional">Internacional</option>
            </select>
          </li>
          <li>
            <div className="checkBox">
              <input
                id="typeTripCheck"
                name="typeTripCheck"
                type="checkbox"
                className="checkbox"
                onChange={(e) =>
                  form.setFieldValue('typeTripCheck', e.target.checked)
                }
                checked={form.values.typeTripCheck}
              />
              <label htmlFor="typeTripCheck">
                Filtrar por tipo de viagem:{' '}
              </label>
            </div>
            <select
              disabled={!form.values.typeTripCheck}
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
          </li>
        </ul>
        <Button
          variant="secondary"
          type="submit"
          title="Clique aqui para adicionar um filtro"
        >
          {handleFilter() ? 'Limpar Filtro' : 'Filtrar'}
        </Button>
      </form>
    </Container>
  )
}

export default FormFilter
