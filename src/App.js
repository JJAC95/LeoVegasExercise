import { useEffect, useState } from 'react';
import './App.css';
import { gamesRepository } from './repositories/gamesRepository';
import { Header } from './components/Header';

import { GamesContainer } from './components/GamesContainer';
import { FiltersMenu } from './components/FiltersMenu';
import { removeDuplicates } from './helpers/removeDuplicates';
import { filterGames } from './helpers/filterGames';
function App() {
	const [allGames, setAllGames] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [games, setGames] = useState([]);
	const [filters, setFilters] = useState([]);

	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		setLoading(true);
		gamesRepository.getGames().then((res) => {
			const uniqueItems = removeDuplicates(res);
			setGames(uniqueItems);
			setAllGames(uniqueItems);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		if (loading) {
			if (allGames.length !== 0) {
				setLoading(false);
			}
			return;
		}

		const getCategories = (gamesCategories) => {
			gamesCategories.map(
				(gameCategory) =>
					!categories.includes(gameCategory) && categories.push(gameCategory)
			);
		};
		allGames.map((game) => getCategories(game.categories));
		categories.forEach(
			(category) =>
				(categories[categories.indexOf(category)] = {
					name: category,
					checked: false,
				})
		);
	}, [loading]);

	useEffect(() => {
		// setGames(allGames);
		// searchResults(searchInput);
		setGames(filterGames(searchInput, filters, allGames));
	}, [searchInput, filters]);

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	// const searchResults = (searchInput) => {
	// 	setGames(allGames);
	// 	let filterNames = [];
	// 	filters.forEach((filter) => {
	// 		filterNames.push(filter.name);
	// 	});

	// 	let searchResults = allGames.filter((game) =>
	// 		game.gameName.toLowerCase().includes(searchInput.toLowerCase())
	// 	);
	// 	let filterResults =
	// 		searchInput.length === 0
	// 			? allGames.filter((game) =>
	// 					filterNames.every((r) => {
	// 						return game.categories.indexOf(r) !== -1;
	// 					})
	// 			  )
	// 			: searchResults.filter((game) =>
	// 					filterNames.every((r) => {
	// 						return game.categories.indexOf(r) !== -1;
	// 					})
	// 			  );
	// 	setGames(filterResults);
	// };

	return (
		<div className="App">
			<Header handleSearchInput={handleSearchInput} />
			<header className="App-header">
				{allGames.length === 0 ? (
					<p> Loading </p>
				) : (
					<>
						<div style={{ minWidth: '12.5%' }}>
							<FiltersMenu games={categories} setFilters={setFilters} />
						</div>
						<GamesContainer games={games} />
					</>
				)}
			</header>
		</div>
	);
}

export default App;
