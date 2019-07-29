/**
 * Copyright (c) 2019
 * Session Maintenance
 * 
 * @summary Session Maintenance
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */
import React from 'react';

export const setSessionValue = (key, value) => {
    localStorage.setItem(key, value);
}

export const getSessionValue = (key) => {
    return localStorage.getItem(key);
}

export const removeSessionValue = (key) => {
    localStorage.removeItem(key);
}

export const clearAllSession = () => {
    localStorage.clear();
}