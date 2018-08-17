import * as ACTION_TYPES from './accountActionTypes';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import ENDPOINTS from 'utils/endpoints';

import {store} from 'index';

export const attemptSignUp = () => {
    const formData = store.getState().account.signupForm;
    console.log('formData', formData);
    makesSignupAPICall(formData);
    return {
        type: ACTION_TYPES.ATTEMPT_SIGN_UP,
        data: {isFetching: true, errors: null,},
    }
};

export const makesSignupAPICall = (formData) => {
    // make API call

    axios.post(ENDPOINTS.SIGNUP, formData).then(response => console.log(response));
};

export const saveUser = ({user}) => {
    return {
        type: ACTION_TYPES.USER_SAVE,
        data: user,
    }
};


export const addFieldValue = (event) =>  {
    return {
        type: ACTION_TYPES.ADD_FIELD_VALUE,
        data: {[event.target.name]: event.target.value}
    }
};


export const validateOnBlur = (event) => {
    let validationMsg = '';

    if(event.target.name === 'email') {
        if (!isEmail(event.target.value)) {
            validationMsg = 'Invalid Email';
        }
    }
    else if(event.target.name === 'pass') {
        if (event.target.value.length < 2) {
            validationMsg = 'Too Short';
        }
    }

    return{
            type: ACTION_TYPES.FIELD_VALIDATED,
            data: {[event.target.name]: validationMsg}
    };
};
