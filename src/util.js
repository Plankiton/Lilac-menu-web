import axios from 'axios';
export const api = axios.create({
	baseURL: process.env.PREAMAR_API_URL,
	timeout: 1000,
	headers: {'Access-Control-Allow-Origin': '*'}
});

export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
