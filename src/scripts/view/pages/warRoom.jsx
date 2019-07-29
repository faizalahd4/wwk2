/**
 * Copyright (c) 2019
 * War Room
 * 
 * @summary War Room Listing
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {translate} from 'react-i18next';

import {Profile} from '../../components/profile/profile';
import {Languages} from '../../constants/languages';
import * as API from '../../services/api';
import * as Utils from '../../helpers/utils';
import * as Config from '../../constants/config';
import * as Session from '../../helpers/session';

export const WarRoom = props => { 

    const [reactWar, setReactWar] = useState({});
    const [vueWar, setVueWar] = useState({});
    const [angularWar, setAngularWar] = useState({});

    useEffect(() => {
        let urlParams = new URLSearchParams(props.location.search);
        Session.setSessionValue('token', urlParams.get('code'));
        
        API.GetService('https://api.github.com/repos/reactjs/reactjs.org?client_id=' + Config.Client.CLIENT_ID + '&client_secret=' + Config.Client.CLIENT_SECRET_ID).then(response => {
            setReactWar(response);
        });
        API.GetService('https://api.github.com/repos/vuejs/vue?client_id=' + Config.Client.CLIENT_ID + '&client_secret=' + Config.Client.CLIENT_SECRET_ID).then(response => {
            setVueWar(response);
        });
        API.GetService('https://api.github.com/repos/angular/angular?client_id=' + Config.Client.CLIENT_ID + '&client_secret=' + Config.Client.CLIENT_SECRET_ID).then(response => {
            setAngularWar(response);
        });
    }, []);
    
    return (
        <div className="container">
            <div className="sub-header">Alies</div>
            <div className="wr-content-conatiner">
                <Profile 
                title={reactWar.name} 
                img={(reactWar.owner ? reactWar.owner.avatar_url : '')} 
                content={reactWar.description} link={'/warRoomDetails/' + Utils.encrypt('reactjs/reactjs.org')} 
                list={[ 
                    {label: 'Stars', value: reactWar.stargazers_count},
                    {label: 'Issues', value: reactWar.open_issues_count},
                    {label: 'Fork', value: reactWar.forks_count},
                    {label: 'Pull Request', value: reactWar.open_issues_count}]}/>
            </div>
            <br/>

            <div className="sub-header">Enimies</div>
            <div className="wr-content-conatiner">
                <Profile 
                title={vueWar.name} img={(vueWar.owner ? vueWar.owner.avatar_url : '')} 
                content={vueWar.description} link={'/warRoomDetails/' + Utils.encrypt('vuejs/vue')} 
                list={[ 
                    {label: 'Stars', value: vueWar.stargazers_count},
                    {label: 'Issues', value: vueWar.open_issues_count},
                    {label: 'Fork', value: vueWar.forks_count},
                    {label: 'Pull Request', value: vueWar.open_issues_count}]}/>
            </div>
            <div className="wr-content-conatiner">
                <Profile 
                title={angularWar.name} 
                img={(angularWar.owner ? angularWar.owner.avatar_url : '')} 
                content={angularWar.description} link={'/warRoomDetails/' + Utils.encrypt('angular/angular')} 
                list={[ 
                    {label: 'Stars', value: angularWar.stargazers_count},
                    {label: 'Issues', value: angularWar.open_issues_count},
                    {label: 'Fork', value: angularWar.forks_count},
                    {label: 'Pull Request', value: angularWar.open_issues_count}]}
                />
            </div>
        </div>
    )
}


