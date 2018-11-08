import React from 'react';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
{ console.log(authUser) }
                <h1>Account details:</h1>
                <h1>Email: {authUser.email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        }
    </AuthUserContext.Consumer>

export default AccountPage;