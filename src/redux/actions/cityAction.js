export const ALL_CITY =  'ALL_CITY';
export const ALL_CITY_SUCCESS =  'ALL_CITY_SUCCESS';
export const ALL_CITY_ERROR =  'ALL_CITY_ERROR';

export const getAllCity = () => ({
	type: ALL_CITY,
});

export const getAllCitySuccess = (data) => ({
	type: ALL_CITY_SUCCESS,
	data,
});

export const getAllCityError = (error) => ({
	type: ALL_CITY_ERROR,
	error,
});
