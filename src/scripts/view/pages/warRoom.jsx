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

import {Profile} from '../../components/profile/profile';
import * as API from '../../services/api';
import * as Utils from '../../helpers/utils';
import * as Config from '../../constants/config';
import * as Session from '../../helpers/session';
import * as Auth from '../../helpers/auth';
import {Subheader} from '../../components/subheader/subheader';
import {URL} from '../../constants/url';

export const WarRoom = props => { 

    const [reactWar, setReactWar] = useState({});
    const [vueWar, setVueWar] = useState({});
    const [angularWar, setAngularWar] = useState({});

    let urlParams = new URLSearchParams(props.location.search);
    if (urlParams.get('code')) {
        Session.setSessionValue('token', urlParams.get('code'));
    }

    useEffect(() => {
        Auth.AuthURL();
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
        <div id="war-room">
            <section className="section">
                <div className="container">
                    <Subheader title={'Alies'}  subtitle={'Listen up – there’s no war that will end all wars'}/>
                    <div className="wr-content-conatiner">
                        <Profile 
                        title={reactWar.name} 
                        img={(reactWar.owner ? reactWar.owner.avatar_url : '')} 
                        content={reactWar.description} link={URL.WAR_ROOM_DETAILS + '/' + Utils.encrypt('reactjs/reactjs.org')} 
                        list={[ 
                            {label: 'Stars', value: reactWar.stargazers_count, icon: 'icon-star'},
                            {label: 'Issues', value: reactWar.open_issues_count, icon: 'icon-puzzle-piece'},
                            {label: 'Fork', value: reactWar.forks_count, icon: 'icon-user'},
                            {label: 'Pull Request', value: reactWar.open_issues_count, icon: 'icon-upload-alt'}]}/>
                    </div>
                </div>
            </section>
            <section className="section section__bg">
                <div className="container">

                    <Subheader title={'Enimies'}  subtitle={'War is peace. Freedom is slavery. Ignorance is strength'}/>
                    <div className="wr-content-conatiner">
                        <Profile 
                        title={vueWar.name} img={(vueWar.owner ? vueWar.owner.avatar_url : '')} 
                        content={vueWar.description} link={URL.WAR_ROOM_DETAILS + '/' + Utils.encrypt('vuejs/vue')} 
                        list={[ 
                            {label: 'Stars', value: vueWar.stargazers_count, icon: 'icon-star'},
                            {label: 'Issues', value: vueWar.open_issues_count, icon: 'icon-puzzle-piece'},
                            {label: 'Fork', value: vueWar.forks_count, icon: 'icon-user'},
                            {label: 'Pull Request', value: vueWar.open_issues_count, icon: 'icon-upload-alt'}]}/>
                    </div>
                    <div className="wr-content-conatiner">
                        <Profile 
                        title={angularWar.name} 
                        img={(angularWar.owner ? angularWar.owner.avatar_url : '')} 
                        content={angularWar.description} link={URL.WAR_ROOM_DETAILS + '/' + Utils.encrypt('angular/angular')} 
                        list={[ 
                            {label: 'Stars', value: angularWar.stargazers_count, icon: 'icon-star'},
                            {label: 'Issues', value: angularWar.open_issues_count, icon: 'icon-puzzle-piece'},
                            {label: 'Fork', value: angularWar.forks_count, icon: 'icon-user'},
                            {label: 'Pull Request', value: angularWar.open_issues_count, icon: 'icon-upload-alt'}]}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}


