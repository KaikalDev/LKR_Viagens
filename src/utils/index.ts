type PropsDescription = {
  destiny: string
  departureDate: string
  returnDate: string
  typeDestiny: string
  typeTrip: string
}

export const arrayUsersName = (users: User[] | undefined): string[] => {
  const array: string[] = []
  if (users) {
    users.forEach((user) => array.push(user.user))
  }
  return array
}

export const getDate = (date: string) => {
  const [year, month, day] = date.split('-')

  return `${day}/${month}/${year}`
}

export const getDescription = ({
  typeDestiny,
  typeTrip,
  destiny,
  returnDate,
  departureDate
}: PropsDescription) => {
  return `Uma viagem ${typeDestiny} a ${typeTrip} para ${destiny}, no periodo de ${getDate(
    departureDate
  )} a ${getDate(returnDate)}`
}
