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
		<div className="wr-badge">{props.value} {props.label}</div>
    )
}

