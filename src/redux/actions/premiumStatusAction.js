export const PREMIUM_STATUS = 'PREMIUM_STATUS';
export const PREMIUM_STATUS_SUCCESS = 'PREMIUM_STATUS_SUCCESS';
export const PREMIUM_STATUS_ERROR = 'PREMIUM_STATUS_ERROR';

export const getPremiumStatus = (params) => ({
    type: PREMIUM_STATUS,
    params,
});

export const getPremiumStatusSuccess = (data) => ({
    type: PREMIUM_STATUS_SUCCESS,
    data,
});

export const getPremiumStatusError = (error) => ({
    type: PREMIUM_STATUS_ERROR,
    error,
});
