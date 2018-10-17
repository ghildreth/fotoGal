import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink, SignUpForm } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignUp = ({ history }) => 
    <div>
        <h1>SignIn</h1>
        <SignUpForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
