/**
 * Copyright (c) 2019
 * Badge
 * 
 * @summary Badge
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React from "react";

export const Badge = props => {
	
    return (
      <table className="wr-badge">
        <tbody>
          <tr>
            <td align="center" valign="bottom" width="60" className="wr-badge__icon"><i className={[props.icon, 'icon-3x'].join(' ').trim()}></i></td>
            <td align="left" className="wr-badge__value" valign="bottom">
                <p className="wr-badge__value">{props.value}</p>
                <p className="wr-badge__label">{props.label}</p>
            </td>
          </tr>
        </tbody>
      </table>
    )
}

