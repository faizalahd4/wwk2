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

export const Login = props => {

    return (
        <div className="container wr-login">
            <a href={['https://github.com/login/oauth/authorize?scope=user:email&client_id=', Config.Client.CLIENT_ID].join('').trim()}>Login using Github</a>
        </div>
    )
}


