/**
 * Copyright (c) 2019
 * Subheader
 * 
 * @summary Subheader
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React from "react";

export const Subheader = props => {
	
    return (
		<div className="section__subheader">
            <div className="section__title">{props.title}</div>
            <div className="section__subtitle">{props.subtitle}</div>
        </div>
    )
}

