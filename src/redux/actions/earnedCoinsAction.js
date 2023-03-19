export const EARNED_COINS = 'EARNED_COINS';
export const EARNED_COINS_SUCCESS = 'EARNED_COINS_SUCCESS';
export const EARNED_COINS_ERROR = 'EARNED_COINS_ERROR';

export const getEarnedCoins = () => ({
    type: EARNED_COINS,
});

export const getEarnedCoinsSuccess = (data) => ({
    type: EARNED_COINS_SUCCESS,
    data,
});

export const getEarnedCoinsError = (error) => ({
    type: EARNED_COINS_ERROR,
    error,
});
