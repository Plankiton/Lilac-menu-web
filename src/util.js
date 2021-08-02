import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:8000',
	timeout: 1000,
});

export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
