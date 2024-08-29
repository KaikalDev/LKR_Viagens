import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Register from './register'

const Rotas = () => (
  <Routes>
    <Route path="/users/:user_id/trips" element={<Home />} />
    <Route path="/" element={<Register />} />
  </Routes>
)

export default Rotas
