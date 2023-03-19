import friend from './friendReducer';
import user from './userReducer';
import city from './cityReducer';
import school from './schoolReducer';
import question from './questionReducer';
import balance from './balanceReducer';
import earnedCoins from './earnedCoinsReducer';
import compliment from './complimentReducer';
import premiumStatus from './premiumStatusReducer'


const rootReducer = {
    friend,
    user,
    city,
    school,
    question,
    balance,
    earnedCoins,
    compliment,
    premiumStatus,
};

export default rootReducer;
