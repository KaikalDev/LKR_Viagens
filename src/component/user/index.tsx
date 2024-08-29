import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as Images from '../../utils/Images'
import * as S from './styled'

import { logout } from '../../Store/reducers/user'
import { useGetUsersByIdQuery } from '../../services/api'
import { IdParams } from '../../container/CardsList'
import { clear } from '../../Store/reducers/trip'

const User = () => {
  const { user_id } = useParams() as IdParams
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data } = useGetUsersByIdQuery(user_id)

  const user = data?.user

  const getLogaut = () => {
    dispatch(clear())
    dispatch(logout())
    navigate('/')
  }

  return (
    <S.UserContainer>
      <i>
        <img src={Images.UserIcon} alt="Icone de usuario" />
      </i>
      <h4>{user}</h4>
      <button onClick={getLogaut} title="Clique aqui para sair da conta">
        <i>
          <img src={Images.LogoutIcon} alt="logout" />
        </i>
      </button>
    </S.UserContainer>
  )
}

export default User
