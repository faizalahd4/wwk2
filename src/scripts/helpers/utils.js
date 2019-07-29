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