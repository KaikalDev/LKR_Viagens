import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserState = {
  user: User | undefined
  isLogged: boolean
}

const initialState: UserState = {
  user: undefined,
  isLogged: false
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isLogged = true
    },
    logout: (state) => {
      state.user = undefined
      state.isLogged = false
    }
  }
})

export const { login, logout } = UserSlice.actions
export default UserSlice.reducer
