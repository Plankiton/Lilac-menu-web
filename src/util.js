import axios from 'axios';

export const api = axios.create({
	baseURL: '',
	timeout: 100000000,
});

export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
