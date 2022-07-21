export const removeDuplicates = (array) => {
	const uniqueItems = [];

	const uniqueEmployees = array.filter((element) => {
		const isDuplicate = uniqueItems.includes(element.slug);

		if (!isDuplicate) {
			uniqueItems.push(element.slug);

			return true;
		}

		return false;
	});
	return uniqueEmployees;
};
