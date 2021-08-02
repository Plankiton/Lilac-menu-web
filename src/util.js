import Axios from 'axios';

export const api = Axios('api:8000');
export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
