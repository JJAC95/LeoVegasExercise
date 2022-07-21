import { removeDuplicates } from '../../helpers/removeDuplicates';

const gamesList = [
	{
		gameName: '21.co.uk Live Blackjack',
		slug: 'exclusive-blackjack-rx',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-live-blackjack/21-live-blackjack-thumb.jpg',
		categories: ['table', 'Evolution'],
	},
	{
		gameName: '21.co.uk Live Blackjack',
		slug: 'exclusive-blackjack-rx',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-live-blackjack/21-live-blackjack-thumb.jpg',
		categories: ['table', 'Evolution'],
	},
	{
		gameName: 'Exclusive Blackjack 1',
		slug: 'exclusive-blackjack-1',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-exclusive-blackjack-1/21-exclusive-blackjack-1-thumb-hi-res.jpg',
		categories: ['table', 'Evolution'],
	},
	{
		gameName: '21.co.uk Live Blackjack',
		slug: 'exclusive-blackjack-rx',
		gameThumbnail:
			'https://cdn.21.co.uk/images/games/21-live-blackjack/21-live-blackjack-thumb.jpg',
		categories: ['table', 'Evolution'],
	},
];

describe('Remove Duplicates function', () => {
	it('removes duplicate entries', () => {
		const expectedList = [
			{
				gameName: '21.co.uk Live Blackjack',
				slug: 'exclusive-blackjack-rx',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-live-blackjack/21-live-blackjack-thumb.jpg',
				categories: ['table', 'Evolution'],
			},
			{
				gameName: 'Exclusive Blackjack 1',
				slug: 'exclusive-blackjack-1',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-exclusive-blackjack-1/21-exclusive-blackjack-1-thumb-hi-res.jpg',
				categories: ['table', 'Evolution'],
			},
		];

		const actualList = removeDuplicates(gamesList);
		expect(actualList).toEqual(expectedList);
	});
});
