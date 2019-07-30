/**
 * Copyright (c) 2019
 * Login
 * 
 * @summary Login
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState, useEffect} from "react";

import * as Config from '../../constants/config';
import * as Auth from '../../helpers/auth';

export const Login = props => {

    useEffect(() => {
        Auth.AuthURL();
    }, []);

    return (
        <div className="container wr-login">
            <a href={['https://github.com/login/oauth/authorize?scope=user:email&client_id=', Config.Client.CLIENT_ID].join('').trim()}>
                <i className="icon-github icon-4x"></i>
                <span>Login using Github</span>
            </a>
        </div>
    )
}


