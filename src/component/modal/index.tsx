import { useDispatch, useSelector } from 'react-redux'

import { Overlay } from '../../styles'
import { Infos } from './styles'

import * as Images from '../../utils/Images'

import { closeModal } from '../../Store/reducers/trip'
import { RootReducer } from '../../Store'
import { getDate } from '../../utils'

const Modal = () => {
  const dispatch = useDispatch()

  const { isOpen, tripModal } = useSelector((state: RootReducer) => state.trip)

  return (
    <div style={{ display: `${isOpen ? 'block' : 'none'}` }}>
      <Overlay onClick={() => dispatch(closeModal())}>
        <div>
          {tripModal && (
            <Infos>
              <li>
                <h5>
                  Destino:<span>{tripModal.destiny}</span>
                </h5>
              </li>
              <li>
                <h5>
                  Data da viagem:
                  <span>{getDate(tripModal.departureDate)}</span>
                </h5>
              </li>
              <li>
                <h5>
                  Data da chegada:
                  <span>{getDate(tripModal.returnDate)}</span>
                </h5>
              </li>
              <li>
                {tripModal.typeDestiny === 'nacional' ? (
                  <i>
                    <img src={Images.NationalIcon} alt="Nacional" />
                    <h5>Nacional</h5>
                  </i>
                ) : (
                  <i>
                    <img src={Images.InternationalIcon} alt="Internacional" />
                    <h5>Internacional</h5>
                  </i>
                )}
                {tripModal.typeTrip === 'lazer' ? (
                  <i>
                    <img src={Images.LeisureIcon} alt="Lazer" />
                    <h5>Lazer</h5>
                  </i>
                ) : (
                  <i>
                    <img src={Images.WorkIcon} alt="Trabalho" />
                    <h5>Trabalho</h5>
                  </i>
                )}
              </li>
              <li>
                <h5>Roteiro da viagem: </h5>
                <p>{tripModal.description}</p>
              </li>
            </Infos>
          )}
        </div>
      </Overlay>
    </div>
  )
}

export default Modal
