async function fetchAPI(query) {
	const res = await fetch(`${process.env.REACT_APP_API_ADMIN_URL}${query}`);	
	// the API calls are asynchronous, fetch API returns a Promise. Hence, we chain the then method (Or we can use async await) with a callback, 
	// which will be called when we receive the response from the server/backend. 
	// Since we need the response to be resolved to a JSON, we call .json() method with the returned response. 
	// Again .json() return a promise, therefore we need to chain another then(Or we can use async await) method to resolve the second promise.

	// if( res.status !== 200 ){ OR 
	if( !res.ok ){ 
		const data = {responseCode:500};
		return data;
	} else {
		const data = await res.json();
		data.responseCode = res.status ? res.status : 200;
		return data;
	}
}

export async function home_api() {
	try {
        const data = await fetchAPI('/acf/v2/options/');
		return data;
	} catch(error) {
        const data = {responseCode:error.data.status};
		return data;
	}
}