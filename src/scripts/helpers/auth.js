/**
 * Copyright (c) 2019
 * Auth Maintenance
 * 
 * @summary Auth Maintenance
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */
import React, {useEffect} from 'react';
import * as Session from '../helpers/session';

export const Auth = props => {
    let isUserLoggedIn = (Session.getSessionValue("token")) ? true : false;
    
    if (!isUserLoggedIn) {
        window.location.href = '/';
    }
}