/**
 * Copyright (c) 2019
 * APP
 * 
 * @summary APP
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import {Header} from './scripts/view/base/header';
import {Footer} from './scripts/view/base/footer';

import {WarRoom} from './scripts/view/pages/warRoom';
import {WarRoomDetails} from './scripts/view/pages/warRoomDetails';
import {Login} from './scripts/view/pages/login';
import {Languages} from './scripts/constants/languages';
import {URL} from './scripts/constants/url';
import './styles/main.scss';

function App() {

  return (
	<div className="app-container">
		<Router>
			<Header />
			<Route path={URL.HOME} exact component={Login} />
			<Route path={URL.WAR_ROOM}  component={WarRoom} />
			<Route path={[URL.WAR_ROOM_DETAILS, '/:reponame'].join('').trim()} component={WarRoomDetails} />
			<Footer />
		</Router>
	</div>	
  	);
}

export default withTranslation(Languages.DEFAULT_NS)(App);
