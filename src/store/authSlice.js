import {createSlice} from '@reduxjs/toolkit'

const CORRECT_CREDENTIALS = {
	login: 'developer21',
	password: '123456'
}

const initialState = {
	isSignedIn: false,
	currentUser: null,
	enteredCredentialsValidity: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		initAuth: (state, {payload}) => {
			state.isSignedIn = payload.isSignedIn || false
			state.currentUser = payload.currentUser || null
		},
		checkCredentialsValidity: (state, {payload}) => {
			const {login, password} = payload
			const correctLogin = login === CORRECT_CREDENTIALS.login
			const correctPassword = password === CORRECT_CREDENTIALS.password
			state.enteredCredentialsValidity = correctLogin && correctPassword
		},
		signin: (state, {payload}) => {
			if (state.enteredCredentialsValidity) {
				state.isSignedIn = true
				state.currentUser = payload
			}
		},
		signout: () => {
			return initialState
		}
	}
})

export const authReducer =  authSlice.reducer
export const {initAuth, checkCredentialsValidity, signin, signout} = authSlice.actions
