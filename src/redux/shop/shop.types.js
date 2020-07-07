// Create pseudo-typescript so set variable is used instead of typed string
const ShopActionTypes = {
	// UPDATE_COLLECTIONS: "UPDATE_COLLECTIONS", => Deprecated for redux-thunk
	FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START",
	FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS",
	FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE",
};

export default ShopActionTypes;