import React from 'react';

import {Link} from 'react-router-dom';
import {NAV_LINKS} from "utils/constants";

const Login = () =>
    <div className="login">
        <form id="msform">
            <fieldset>
                <h2 className="fs-title">Login your account</h2>
                <input type="text" name="email" placeholder="Email"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="button" name="next" className="next action-button" value="Next"/>
                <span className="link">If you have not register <Link to={NAV_LINKS.SIGNUP.url}>click here</Link></span>
            </fieldset>
        </form>
    </div>;

export default Login;
