import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { RootReducer } from '../../Store'

import { Container } from './styles'
import Card from '../../component/card'

import { openModal, setTrips } from '../../Store/reducers/trip'
import { useGetTripsQuery } from '../../services/api'

export type IdParams = {
  user_id: string
}

const CardsList = () => {
  const { user_id } = useParams() as IdParams
  const dispatch = useDispatch()

  const { trips } = useSelector((state: RootReducer) => state.trip)

  const { data } = useGetTripsQuery(user_id)

  useEffect(() => {
    if (data) {
      dispatch(setTrips(data))
    }
  }, [dispatch, data])

  return (
    <Container>
      {trips.map((trip) => (
        <Card
          key={trip.id}
          id={trip.id}
          description={trip.description}
          departureDate={trip.departureDate}
          destiny={trip.destiny}
          returnDate={trip.returnDate}
          typeDestiny={trip.typeDestiny}
          typeTrip={trip.typeTrip}
          onClick={() => dispatch(openModal(trip.id))}
        />
      ))}
    </Container>
  )
}

export default CardsList
