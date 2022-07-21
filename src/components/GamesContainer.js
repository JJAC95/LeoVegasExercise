import { GameItem } from './GameItem';
import { Listgroup } from './ListGroup';
import '../styles/gameContainer.css';
export const GamesContainer = ({ games }) => {
	return (
		<div className="gamesListContainer">
			<p>All Games</p>
			{games.length === 0 && <p>Sorry no search results found.</p>}
			<Listgroup>
				{games.map((game) => (
					<GameItem game={game} key={game.slug} />
				))}
			</Listgroup>
		</div>
	);
};
