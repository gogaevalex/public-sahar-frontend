export const BALANCE = 'BALANCE';
export const BALANCE_SUCCESS = 'BALANCE_SUCCESS';
export const BALANCE_ERROR = 'BALANCE_ERROR';

export const getBalance = (params) => ({
    type: BALANCE,
    params,
});

export const getBalanceSuccess = (data) => ({
    type: BALANCE_SUCCESS,
    data,
});

export const getBalanceError = (error) => ({
    type: BALANCE_ERROR,
    error,
});
