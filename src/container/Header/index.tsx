import ButtonsContainer from '../../container/ButtonsContainer'
import User from '../../component/user'
import * as S from './styled'

const Header = () => (
  <S.Container>
    <div className="TopContainer">
      <h1>LKR - Viagens</h1>
      <User />
    </div>
    <ButtonsContainer />
  </S.Container>
)

export default Header
