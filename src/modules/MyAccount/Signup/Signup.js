import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import {NAV_LINKS} from "utils/constants";

import isEmail from 'validator/lib/isEmail';

import {validateOnBlur, addFieldValue, attemptSignUp} from '../accountActions';

const Signup = ({formErrors, isFetching, onValueChange, validateOnBlur, onSubmit}) =>
    <div className="signup">
        <form id="msform">
            <fieldset>
                <h2 className="fs-title">Create your account</h2>
                <input type="text" name="email" placeholder="Email" onChange={onValueChange} onBlur={validateOnBlur}/>
                {formErrors.email && <p>{formErrors.email}</p>}
                <input type="password" name="pass" placeholder="Password" onChange={onValueChange}  onBlur={validateOnBlur}/>
                {formErrors.pass && <p>{formErrors.pass}</p>}
                <input type="password" name="cpass" placeholder="Confirm Password" onChange={onValueChange}/>
                <input type="button"
                       name="next"
                       className="next action-button"
                       value={isFetching ? 'Loading....' : "Next"}
                       onClick={onSubmit}
                />
                <span className="link">If you have already user  <Link to={NAV_LINKS.LOGIN.url}>click here</Link></span>
            </fieldset>
        </form>
    </div>;

Signup.propTypes = {
    onValueChange: PropTypes.func.isRequired,
    validateOnBlur: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => {
    return {
        formErrors: store.account.signupForm.errors,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onValueChange: (event) => dispatch(addFieldValue(event)),
        validateOnBlur: (event) => dispatch(validateOnBlur(event)),
        onSubmit: () => dispatch(attemptSignUp()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
