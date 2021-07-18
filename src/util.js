export function toId(text, isLink = false) {
	var id = `${text.trim().replaceAll(" ", "-").toLowerCase()}`;
	if (isLink)
		return '#'+id;
	return id;
}
