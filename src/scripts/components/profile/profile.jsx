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
                    <td align="left" valign="top" width="80%">
                        <div className="title"><Link to={props.link}>{props.title}</Link></div>
                        <div className="content">{props.content}</div>
                        <div className="row layer">
                            {props.list.map((item, i) => {
                                return (
                                <div className="col-md-3 layer-box" key={i}>
                                    <Badge value={item.value} label={item.label} icon={item.icon}></Badge>
                                </div>);
                            })}
                        </div>
                    </td>
                    <td align="right" valign="top">
                        <img src={props.img} width="90%"/>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

