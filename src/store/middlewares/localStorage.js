import {init} from '../initSlice'
import {initAuth, signin, signout} from '../authSlice'
import {storage} from '../../utils/storage'

export const localStorageMiddleware = store => next => action => {
	next(action)

	if (init.match(action)) {
		const storedAuthStatus = storage('isSignedIn')
		const storedCurrentUser = storage('currentUser')
		store.dispatch(initAuth({
			isSignedIn: storedAuthStatus,
			currentUser: storedCurrentUser
		}))
	}
	if (signin.match(action) || signout.match(action)) {
		const isSignedIn = store.getState().auth.isSignedIn
		const currentUser = store.getState().auth.currentUser
		storage('isSignedIn', {data: isSignedIn})
		storage('currentUser', {data: currentUser})
	}
}
