import {combineReducers} from 'redux';

import account from 'modules/MyAccount/accountReducer';

const rootReducer = combineReducers({
    account,
});

export default rootReducer;
