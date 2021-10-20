import {createSlice} from '@reduxjs/toolkit'

const initSlice = createSlice({
	name: 'init',
	initialState: {
		init: false
	},
	reducers: {
		init: (state) => {
			state.init = true
		},
	}
})

export const initReducer = initSlice.reducer
export const {init} = initSlice.actions
