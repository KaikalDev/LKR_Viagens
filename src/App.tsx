import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './Page/routes'

import { Container, GlobalStyle } from './styles'
import { Store } from './Store'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
