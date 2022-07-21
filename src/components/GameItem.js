import DefaultImage from '../images/Slot-Machine.jpg';
import '../styles/gameItem.css';
export const GameItem = ({ game }) => {
	const handleError = (e) => {
		e.target.src = DefaultImage;
	};

	return (
		<li>
			<div className="imgContainer">
				<img
					alt={game.gameName}
					src={game.gameThumbnail || DefaultImage}
					onError={handleError}
				/>
			</div>
			<p>{game.gameName}</p>
		</li>
	);
};
