import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type PurchaseResponse = {
  orderId: string
}

type PurchasePayloadTrip = {
  id: number
  userId: string
  departureDate: string
  returnDate: string
  destiny: string
  typeDestiny: 'nacional' | 'internacional'
  typeTrip: 'lazer' | 'trabalho'
  description: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users/'
    }),
    getUsersById: builder.query<User, string>({
      query: (userId) => `/users/${parseInt(userId)}/`
    }),
    getTrips: builder.query<trip[], string>({
      query: (userId) => `/users/${userId}/trips/`
    }),
    postUser: builder.mutation<PurchaseResponse, User>({
      query: (body) => ({
        url: '/users/',
        method: 'POST',
        body
      })
    }),
    postTrip: builder.mutation<PurchaseResponse, PurchasePayloadTrip>({
      query: ({ userId, ...body }) => ({
        url: `/users/${userId}/trips/`,
        method: 'POST',
        body
      })
    }),
    removeTrip: builder.mutation<void, number>({
      query: (tripId) => ({
        url: `/users/${tripId}/trips/`,
        method: 'DELETE'
      })
    }),
    editTrip: builder.mutation<void, PurchasePayloadTrip>({
      query: ({ id, ...body }) => ({
        url: `/trips/${id}/`,
        method: 'PUT',
        body
      })
    })
  })
})

export const {
  useGetUsersQuery,
  useGetTripsQuery,
  useGetUsersByIdQuery,
  usePostTripMutation,
  usePostUserMutation,
  useRemoveTripMutation,
  useEditTripMutation
} = api
export default api
