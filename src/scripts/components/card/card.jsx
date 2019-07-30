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
import * as Utils from '../../helpers/utils';

export const Card = props => {

    return (
        <table width="100%" className={[props.newClass, 'rw-card'].join(' ').trim()}>
            <tbody>
                <tr>
                    <td align="center" valign="top" width="100">
                        <img src={props.img} width="100" height="100"/>
                    </td>
                    <td align="left" valign="top" className="content-box">
                        <div className="title" title={props.title}>{Utils.trunc(props.title, 15)}</div>
                        <div className="content">{props.content}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

