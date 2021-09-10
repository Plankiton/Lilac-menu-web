import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://192.168.11.118:8000',
	timeout: 100000000,
});

export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
