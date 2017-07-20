export function httpReducer(state = [], action: any) {
	switch (action.type) {
        case 'GET_ANIME':
        case 'GET_ANIME_LIST':
        case 'GET_ANIME_SUCCESS':
            return [...state, action.payload];
		default:
			return state;
	}
}

export function loaderReducer(state = [], action: any){
    switch (action.type) {
        case 'LOADING_START':
        case 'LOADING_END':
            return [...state, action.payload];
    }
}