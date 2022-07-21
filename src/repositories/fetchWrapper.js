const get = async (url) => {
	try {
		const rawResponse = await fetch(url, { method: 'GET' });
		const response = await rawResponse.json();
		return response;
	} catch (error) {
		return { responseBody: null, responseStatus: 400 };
	}
};

export const fetchWrapper = {
	get,
};
