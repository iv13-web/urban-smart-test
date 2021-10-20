import {configureStore} from '@reduxjs/toolkit'
import {authReducer} from './authSlice'
import {initReducer} from './initSlice'
import {localStorageMiddleware} from './middlewares/localStorage'

export const store = configureStore({
	reducer: {
		init: initReducer,
		auth: authReducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(localStorageMiddleware)
	}
})