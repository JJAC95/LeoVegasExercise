import { enableFetchMocks } from 'jest-fetch-mock';
import { gamesRepository } from '../../repositories/gamesRepository';

enableFetchMocks();

beforeEach(() => {
	fetch.resetMocks();
});

describe('gamesRepository', () => {
	it('getGames success', async () => {
		const mockedGames =
			'[\n {\n  "gameName": "Exclusive Live Roulette",\n  "slug": "exclusive-live-roulette",\n "gameThumbnail": "https://cdn.21.co.uk/images/games/21-exclusive-live-roulette/21-exclusive-live-roulette-thumb-hi-res.jpg",\n "categories": [ "table",\n "Evolution"\n ]  }]';

		fetch.mockResponse(mockedGames);

		const games = await gamesRepository.getGames();

		const expectedResponse = [
			{
				gameName: 'Exclusive Live Roulette',
				slug: 'exclusive-live-roulette',
				gameThumbnail:
					'https://cdn.21.co.uk/images/games/21-exclusive-live-roulette/21-exclusive-live-roulette-thumb-hi-res.jpg',
				categories: ['table', 'Evolution'],
			},
		];
		expect(games).toEqual(expectedResponse);
	});
});
