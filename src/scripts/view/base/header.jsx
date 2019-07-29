/**
 * Copyright (c) 2019
 * Header
 * 
 * @summary APP Header
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState} from "react";
import { Link } from "react-router-dom";

import * as Session from '../../helpers/session';

export const Header = (props) => {
    
    const isUserLogged = (!Session.getSessionValue("token")) ? 'dn' :  '';
    
    const logoff = () => {
        Session.clearAllSession();
        window.location.href = '/';
    }
    
    return (
			<header>
                <table width='100%' cellPadding='0' cellSpacing='0'>
                    <tbody>
                    <tr>
                        <td className="logo" align="left" valign="middle">React War ROOM</td>
                        <td align="right" valign="middle" className={isUserLogged}><span onClick={logoff}>Logoff</span></td>
                    </tr>
                    </tbody>
                </table>
            </header>
    )
}

