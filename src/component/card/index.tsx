import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useState } from 'react'

import { IdParams } from '../../container/CardsList'
import { RootReducer } from '../../Store'

import * as S from './styles'
import * as Images from '../../utils/Images'

import { validationSchemaAdd } from '../../utils/validationSchemas/Add'
import { getDate, getDescription } from '../../utils'
import { useParams } from 'react-router-dom'
import * as Api from '../../services/api'
import Loader from '../loader'
import Button from '../Button'

type Props = {
  id: number
  destiny: string
  departureDate: string
  returnDate: string
  typeDestiny: 'nacional' | 'internacional'
  typeTrip: 'lazer' | 'trabalho'
  description: string
  onClick: () => void
}

const Card = ({
  id,
  destiny,
  departureDate,
  returnDate,
  typeDestiny,
  typeTrip,
  description,
  onClick
}: Props) => {
  const { user_id } = useParams() as IdParams

  const [isCopying, setIsCopying] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const { trips } = useSelector((state: RootReducer) => state.trip)

  const [editTrip, { isLoading: isEditingTrip }] = Api.useEditTripMutation()
  const { refetch } = Api.useGetTripsQuery(user_id)
  const [purchase] = Api.usePostTripMutation()
  const [removeTrip] = Api.useRemoveTripMutation()

  const handleCopy = async () => {
    setIsCopying(true)
    const copyTrip = trips.find((trip) => trip.id === id)
    if (copyTrip) {
      await purchase(copyTrip)
      refetch()
    }
    setIsCopying(false)
  }

  const handleRemove = async () => {
    setIsDeleting(true)
    try {
      await removeTrip(id).unwrap()
      refetch()
    } catch (error) {
      console.error('Failed to remove trip:', error)
    }
    setIsDeleting(false)
  }

  const form = useFormik({
    initialValues: {
      id,
      destiny,
      departureDate,
      returnDate,
      typeDestiny,
      typeTrip,
      userId: user_id,
      description:
        description ===
        getDescription({
          typeDestiny,
          typeTrip,
          departureDate,
          destiny,
          returnDate
        })
          ? ''
          : description
    },
    validationSchema: validationSchemaAdd,
    onSubmit: async (values) => {
      if (!values.description) {
        values.description = getDescription({
          destiny: values.destiny,
          departureDate: values.departureDate,
          returnDate: values.returnDate,
          typeDestiny: values.typeDestiny,
          typeTrip: values.typeTrip
        })
      }

      await editTrip({
        id: values.id,
        destiny: values.destiny,
        departureDate: values.departureDate,
        returnDate: values.returnDate,
        typeDestiny: values.typeDestiny,
        typeTrip: values.typeTrip,
        description: values.description,
        userId: values.userId
      })

      setIsEditing(false)
      refetch()
    }
  })

  return (
    <>
      {isCopying || isDeleting || isEditingTrip ? (
        <Loader />
      ) : (
        <S.Container>
          {isEditing ? (
            <S.EditContainer>
              <form onSubmit={form.handleSubmit}>
                <ul className="infos">
                  <li>
                    Destino:
                    <input
                      id="destiny"
                      name="destiny"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.destiny}
                    />
                  </li>
                  <li>
                    Data da viagem:
                    <input
                      id="departureDate"
                      name="departureDate"
                      type="date"
                      onChange={form.handleChange}
                      value={form.values.departureDate}
                    />
                  </li>
                  <li>
                    Data da chegada:
                    <input
                      id="returnDate"
                      name="returnDate"
                      type="date"
                      onChange={form.handleChange}
                      value={form.values.returnDate}
                    />
                  </li>
                  <li>
                    <select
                      id="typeDestiny"
                      name="typeDestiny"
                      onChange={form.handleChange}
                      value={form.values.typeDestiny}
                    >
                      <option value="nacional">Nacional</option>
                      <option value="internacional">Internacional</option>
                    </select>
                    <select
                      id="typeTrip"
                      name="typeTrip"
                      onChange={form.handleChange}
                      value={form.values.typeTrip}
                    >
                      <option value="lazer">Lazer</option>
                      <option value="trabalho">Trabalho</option>
                    </select>
                  </li>
                </ul>
                <ul className="buttons">
                  <li className="comfirm">
                    <Button
                      variant="icon"
                      type="submit"
                      disabled={isEditingTrip}
                      title="Confirmar"
                    >
                      <img src={Images.CheckIcon} alt="" />
                    </Button>
                  </li>
                  <li className="cancel">
                    <Button
                      variant="icon"
                      type="reset"
                      onClick={() => setIsEditing(false)}
                      disabled={isEditingTrip}
                      title="Cancelar"
                    >
                      <img src={Images.CloseIcon} alt="" />
                    </Button>
                  </li>
                </ul>
              </form>
            </S.EditContainer>
          ) : (
            <S.CardContainer>
              <ul onClick={onClick} className="infos">
                <li>
                  Destino:<span>{destiny}</span>
                </li>
                <li>
                  Data da viagem:<span>{getDate(departureDate)}</span>
                </li>
                <li>
                  Data da chegada:<span>{getDate(returnDate)}</span>
                </li>
                <li>
                  <i>
                    <img
                      title={typeDestiny}
                      src={
                        typeDestiny === 'nacional'
                          ? Images.NationalIcon
                          : Images.InternationalIcon
                      }
                      alt={typeDestiny}
                    />
                  </i>
                  <i>
                    <img
                      title={typeTrip}
                      src={
                        typeTrip === 'lazer'
                          ? Images.LeisureIcon
                          : Images.WorkIcon
                      }
                      alt={typeTrip}
                    />
                  </i>
                </li>
              </ul>
              <ul className="buttons">
                <li>
                  <Button
                    type="button"
                    variant="icon"
                    onClick={handleRemove}
                    disabled={isDeleting}
                    title="Clique aqui para deletar o item"
                  >
                    <img src={Images.RemoveIcon} alt="" />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="icon"
                    onClick={handleCopy}
                    disabled={isCopying}
                    title="Clique aqui para copiar o item"
                  >
                    <img src={Images.CopyIcon} alt="" />
                  </Button>
                </li>
                <li>
                  <Button
                    type="button"
                    variant="icon"
                    onClick={() => setIsEditing(true)}
                    title="Clique aqui para editar o item"
                  >
                    <img src={Images.EditIcon} alt="" />
                  </Button>
                </li>
              </ul>
            </S.CardContainer>
          )}
        </S.Container>
      )}
    </>
  )
}

export default Card
