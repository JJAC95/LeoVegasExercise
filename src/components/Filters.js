import { Checkbox } from './Checkbox';
import '../styles/filters.css';
export const Filters = ({ games, setFilters }) => {
	const handleCheckbox = (e) => {
		let index = games.findIndex((item) => item.name === e.target.value);
		games[index].checked = !games[index].checked;
		setFilters(games.filter((cats) => cats.checked === true));
	};

	return (
		<>
			{games.length === 0 ? (
				<p> Loading </p>
			) : (
				<fieldset onChange={handleCheckbox}>
					{games.map((category) => (
						<Checkbox
							value={category.name}
							label={
								category.name.charAt(0).toUpperCase() + category.name.slice(1)
							}
							checked={category.checked}
							key={category.name}
						/>
					))}
				</fieldset>
			)}
		</>
	);
};
