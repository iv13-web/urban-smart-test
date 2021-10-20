export function storage (key, payload) {
	if (!payload ?? payload) {
		try {
			return JSON.parse(localStorage.getItem(key))
		} catch (e) {}
	}
	const {data} = payload
	localStorage.setItem(key, JSON.stringify(data))
}
