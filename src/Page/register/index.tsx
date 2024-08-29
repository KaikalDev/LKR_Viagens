import FormRegister from '../../container/formRegister'
import Header from '../../container/Header'
import { Overlay } from '../../styles'

const Register = () => (
  <>
    <Header />
    <Overlay className="register" />
    <FormRegister />
  </>
)

export default Register
