/**
 * Copyright (c) 2019
 * Utiles
 * 
 * @summary Utiles
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

//import React from 'react';

export const encrypt = data => {
    return window.btoa( data );
}

export const decrypt = data => {
    return window.atob( data );
}

export const trunc = ( val, max ) => {
    if (!max || val.length <= max) { return val; }
    var subString = val.substr(0, max-1);
    return subString + "...";
};