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
import {URL} from '../constants/url';

export const AuthURL = (props) => {
    let isUserLoggedIn = (Session.getSessionValue("token")) ? true : false;
    let pathname       = window.location.pathname;

    if (!isUserLoggedIn && pathname !== URL.HOME) {
        window.location.href = URL.HOME;
    } else if (isUserLoggedIn && pathname === URL.HOME) {
        window.location.href = URL.WAR_ROOM;
    }
}