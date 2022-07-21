import { SearchBar } from './SearchBar';
import '../styles/header.css';
export const Header = ({ handleSearchInput }) => {
	return (
		<>
			<div className="headerItems">
				<div className="searchSection">
					<SearchBar handleInput={handleSearchInput} />
				</div>
			</div>
		</>
	);
};
