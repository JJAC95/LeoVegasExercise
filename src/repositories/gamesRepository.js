import { fetchWrapper } from './fetchWrapper';

export const gamesRepository = {
	getGames: async () => {
		return await fetchWrapper.get(
			'https://run.mocky.io/v3/0f89d26e-25e6-4fdd-ac35-a847ad4352c6'
		);
	},
};
