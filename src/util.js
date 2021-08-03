import axios from 'axios';

export const api = axios.create({
	baseURL: process.env.REACT_APP_URL_API,
	timeout: 100000000,
});

export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
