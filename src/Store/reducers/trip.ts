import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TripState = {
  trips: trip[]
  tripModal: trip | undefined
  isOpen: boolean
}

type PropsFilterTrip = {
  destinyCheck: boolean
  destiny: string

  departureDateCheck: boolean
  departureDate1: string
  departureDate2: string

  typeDestinyCheck: boolean
  typeDestiny: string

  typeTripCheck: boolean
  typeTrip: string
}

const initialState: TripState = {
  trips: [],
  tripModal: undefined,
  isOpen: false
}

const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    setTrips: (state, action: PayloadAction<trip[]>) => {
      state.trips = action.payload
    },
    add: (state, action: PayloadAction<trip>) => {
      state.trips.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload)
    },
    filter: (state, action: PayloadAction<PropsFilterTrip>) => {
      if (action.payload.destinyCheck) {
        state.trips = state.trips.filter((trip) =>
          trip.destiny.includes(action.payload.destiny)
        )
      }
      if (action.payload.departureDate1) {
        state.trips = state.trips.filter(
          (trip) =>
            new Date(trip.departureDate) >=
              new Date(action.payload.departureDate1) &&
            new Date(trip.departureDate) <=
              new Date(action.payload.departureDate2)
        )
      }
      if (action.payload.typeDestinyCheck) {
        state.trips = state.trips.filter(
          (trip) => trip.typeDestiny === action.payload.typeDestiny
        )
      }
      if (action.payload.typeTripCheck) {
        state.trips = state.trips.filter(
          (trip) => trip.typeTrip === action.payload.typeTrip
        )
      }
    },
    clear: (state) => {
      state.trips = []
    },
    openModal: (state, action: PayloadAction<number>) => {
      state.isOpen = true
      state.tripModal = state.trips.find((trip) => trip.id === action.payload)
    },
    closeModal: (state) => {
      state.isOpen = false
      state.tripModal = undefined
    }
  }
})

export const { add, clear, closeModal, filter, openModal, remove, setTrips } =
  tripSlice.actions
export default tripSlice.reducer
