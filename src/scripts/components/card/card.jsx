/**
 * Copyright (c) 2019
 * Card
 * 
 * @summary Card
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React from "react";
import { Link } from "react-router-dom";

export const Card = props => {

    return (
        <table width="100%" className={props.newClass + ' rw-card'}>
            <tbody>
                <tr>
                    <td align="center" valign="top" width="100">
                        <img src={props.img} width="100" height="100"/>
                    </td>
                    <td align="left" valign="top" className="content-box">
                        <div className="title"><Link to={props.link}>{props.title}</Link></div>
                        <div className="content">{props.content}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

