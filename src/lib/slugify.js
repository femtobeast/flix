export const slugifyTitle = (title = '') => {
	return title
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
}
