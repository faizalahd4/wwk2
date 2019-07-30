/**
 * Copyright (c) 2019
 * Header
 * 
 * @summary APP Header
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import * as Session from '../../helpers/session';
import {URL} from '../../constants/url';

export const Header = (props) => {
    
    const [isUserLogged, setIsUserLogged] = useState('');
    
    useEffect(() => {
        const isUserLogged = (!Session.getSessionValue("token")) ? 'dn' :  '';
        setIsUserLogged(isUserLogged);
    }, []);

    const logoff = () => {
        Session.clearAllSession();
        window.location.href = URL.HOME;
    }
    
    return (
			<header>
                <table width='100%' cellPadding='0' cellSpacing='0'>
                    <tbody>
                    <tr>
                        <td className="logo" align="left" valign="middle"><a href="/"><i className="icon-rocket"></i>&nbsp;React War ROOM</a></td>
                        <td align="right" valign="middle"><span onClick={logoff} className={[isUserLogged, 'logoff'].join(' ').trim()}> <i className="icon-off"></i></span></td>
                    </tr>
                    </tbody>
                </table>
            </header>
    )
}

