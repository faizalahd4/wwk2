/**
 * Copyright (c) 2019
 * Profile
 * 
 * @summary Profile
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React from "react";
import { Link } from "react-router-dom";
import {Badge} from '../badge/badge';

export const Profile = props => {

    return (
        <div className={[props.newClass, 'rw-profile'].join(' ').trim()}>
        <table width="100%" cellPadding='10'>
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
        <div className="row layer">
            {props.list.map((item, i) => {
                return (
                <div className="col-md-3 layer-box" key={i}>
                    <Badge value={item.value} label={item.label}></Badge>
                </div>);
            })}
        </div>
        </div>
    )
}

