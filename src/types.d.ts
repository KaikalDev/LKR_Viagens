// Declaração de tipos globais
declare type trip = {
  id: number
  destiny: string
  departureDate: string
  returnDate: string
  typeDestiny: 'nacional' | 'internacional'
  typeTrip: 'lazer' | 'trabalho'
  description: string
  userId: string
}

declare type User = {
  userId: string
  user: string
  password: string
}
