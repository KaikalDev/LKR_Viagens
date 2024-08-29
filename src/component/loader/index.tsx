import { BarLoader } from 'react-spinners'
import { Colors, Overlay } from '../../styles'

const Loader = () => (
  <Overlay className="clean">
    <div>
      <BarLoader
        color={Colors.textColor}
        width={'100vw'}
        speedMultiplier={0.4}
      />
    </div>
  </Overlay>
)

export default Loader
