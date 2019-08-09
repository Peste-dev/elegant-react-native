import { reducer as network } from 'react-native-offline'
import github from './github'
import user from './user'

export default {
  ...github,
  ...user,
  network
}
