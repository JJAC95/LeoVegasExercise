import { filterGames } from '../../helpers/filterGames';

const filters = [
	{ name: 'table', checked: true },
	{ name: 'slot', checked: true },
	{ name: 'Felt', checked: true },
];
const gamesList = [
	{
		gameName: 'Relax Blackjack',
		slug: 'blackjack-relax',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-relax-blackjack/21-relax-blackjack-thumb.jpg',
		categories: ['slot', 'table', 'Relax'],
	},
	{
		gameName: '6 in 1 Blackjack',
		slug: '6-in-1-blackjack',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/6-in-1-blackjack/6-in-1-blackjack-thumb-hi-res.jpg',
		categories: ['slot', 'table', 'Felt'],
	},
	{
		gameName: 'Relax Roulette',
		slug: 'relax-roulette',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-relax-roulette/21-relax-roulette-thumb.jpg',
		categories: ['slot', 'table', 'Relax'],
	},
	{
		gameName: '20p Roulette',
		slug: '20p-roulette',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-20p-roulette/21-20p-roulette-thumb.jpg',
		categories: ['slot', 'table', 'Relax'],
	},
	{
		gameName: 'Crazy Coin Flip Live',
		slug: 'crazy-coin-flip-live',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-crazy-coin-flip/21-crazy-coin-flip-thumb-hi-res.jpg',
		categories: ['table', 'Evolution'],
	},
];
describe('Filter Games', () => {
	it('filters by search', () => {
		const expectedResult = [
			{
				gameName: '20p Roulette',
				slug: '20p-roulette',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-20p-roulette/21-20p-roulette-thumb.jpg',
				categories: ['slot', 'table', 'Relax'],
			},
		];

		const actualResult = filterGames('20p', [], gamesList);
		expect(actualResult).toEqual(expectedResult);
	});

	it('filters by categories', () => {
		const expectedResult = [
			{
				gameName: '6 in 1 Blackjack',
				slug: '6-in-1-blackjack',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/6-in-1-blackjack/6-in-1-blackjack-thumb-hi-res.jpg',
				categories: ['slot', 'table', 'Felt'],
			},
		];
		const actualResult = filterGames('', filters, gamesList);
		expect(actualResult).toEqual(expectedResult);
	});

	it('filters by search and categories', () => {
		const newFilters = [
			{ name: 'table', checked: true },
			{ name: 'slot', checked: true },
		];
		const expectedResult = [
			{
				gameName: 'Relax Blackjack',
				slug: 'blackjack-relax',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-relax-blackjack/21-relax-blackjack-thumb.jpg',
				categories: ['slot', 'table', 'Relax'],
			},
			{
				gameName: 'Relax Roulette',
				slug: 'relax-roulette',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-relax-roulette/21-relax-roulette-thumb.jpg',
				categories: ['slot', 'table', 'Relax'],
			},
		];
		const actualResult = filterGames('relax', newFilters, gamesList);
		expect(actualResult).toEqual(expectedResult);
	});
});
