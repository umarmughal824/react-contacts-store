import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { attemptSignUp } from "./accountActions";

const MyAccount = ({isFetching, user, onFetchData}) => {
    console.log('isFetching ?', isFetching);
    console.log('user', user);

    return (
        <div>
            <h2>My Account</h2>
            <button onClick={onFetchData}>Fetch Data</button>
        </div>
    )
};

MyAccount.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object,
    onFetchData: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
      user: state.account.user,
      isFetching: state.account.isFetching,
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => dispatch(attemptSignUp()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
