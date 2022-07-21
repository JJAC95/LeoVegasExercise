export const filterGames = (searchInput, filters, allGames) => {
	let filterNames = [];
	filters.forEach((filter) => {
		filterNames.push(filter.name);
	});

	let searchResults = allGames.filter((game) =>
		game.gameName.toLowerCase().includes(searchInput.toLowerCase())
	);
	let filterResults =
		searchInput.length === 0
			? allGames.filter((game) =>
					filterNames.every((r) => {
						return game.categories.indexOf(r) !== -1;
					})
			  )
			: searchResults.filter((game) =>
					filterNames.every((r) => {
						return game.categories.indexOf(r) !== -1;
					})
			  );
	return filterResults;
};
