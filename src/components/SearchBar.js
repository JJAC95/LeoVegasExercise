import '../styles/searchbar.css';

export const SearchBar = ({ style, handleInput }) => {
	return (
		<div className="searchBarContainer">
			<div style={{ position: 'relative' }}>
				<input
					type="text"
					name="searchBar"
					id="input"
					placeholder="Search Games"
					style={style}
					onChange={(input) => handleInput(input)}
				/>
			</div>
		</div>
	);
};
