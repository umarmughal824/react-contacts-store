import * as ACTION_TYPES from './accountActionTypes';

const INITIAL_STATE = {
    // user: {email: 'mrumarasghar@gmail.com', firstName: 'Umar', lastName: 'Asghar',},
    user: '',
    token: '',
    isFetching: false,
    errors: null,
    signupForm: {
        errors:{
            email: 'Invalid Email',
        }
    },
    loginForm: {},
};

const accountReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPES.ATTEMPT_SIGN_UP:
            return {
                ...state,
                isFetching: action.data.isFetching,
                errors: action.data.errors,
            };
        case ACTION_TYPES.USER_SAVE:
            return {
                ...state,
                user: action.data.user,
            };
        case ACTION_TYPES.ADD_FIELD_VALUE:
            return {
                ...state,
                signupForm: {
                    ...state.signupForm,
                    ...action.data,
                }
            };
        case ACTION_TYPES.FIELD_VALIDATED:
            return {
                ...state,
                signupForm: {
                    ...state.signupForm,
                    errors:{
                        ...state.signupForm.errors,
                        ...action.data
                    }
                }
            };
        default:
            return state;
    }
};

export default accountReducer;
