/**
 * Copyright (c) 2019
 * War Room Details
 * 
 * @summary War Room Details
 * @author  Faizal
 * 
 * Created at: 2019 July 26
 */

import React, {useState, useEffect} from "react";

import {Card} from '../../components/card/card';
import {Profile} from '../../components/profile/profile'
import * as API from '../../services/api';
import * as Utils from '../../helpers/utils';
import {Infinitescroll} from "../../components/infinitescroll/infinitescroll";
import * as Config from '../../constants/config';
import * as Auth from '../../helpers/auth';
import {Subheader} from '../../components/subheader/subheader';
import {URL} from '../../constants/url';

export const WarRoomDetails = props => { 

    const [warriorList, setWarriorList] = useState({user: [], end: 0, per: 20, originalData: []});

    const fetchMoreListItems = () => {
        if (warriorList.originalData.length > warriorList.end) {
            setTimeout(() => {
                setWarriorList({
                    ...warriorList, 
                    user: warriorList.originalData.slice(0, warriorList.end + warriorList.per),
                    end: warriorList.end + warriorList.per });
                setIsFetching(false);
            }, 2000);
        }
    }

    const [isFetching, setIsFetching] = Infinitescroll(fetchMoreListItems);
    const [warriorDetails, setWarriorDetails] = useState({});


    useEffect(() => {
        Auth.AuthURL();
        API.GetService('https://api.github.com/repos/' + Utils.decrypt(props.match.params.reponame) + '?client_id=' + Config.Client.CLIENT_ID + '&client_secret=' + Config.Client.CLIENT_SECRET_ID).then(response => {
            setWarriorDetails(response);
            API.GetService('https://api.github.com/repos/' + Utils.decrypt(props.match.params.reponame) + '/subscribers?client_id=' + Config.Client.CLIENT_ID + '&client_secret=' + Config.Client.CLIENT_SECRET_ID).then(responseUser => {
                setWarriorList({
                    ...warriorList, 
                    originalData: responseUser,
                    user: responseUser.slice(0, warriorList.end + warriorList.per),
                    end: warriorList.end + warriorList.per });
            });
        });
    }, []);

    return (
        <div id="war-room-details">
            <section className="section">
                <div className="container">
                    <Subheader title={warriorDetails.name}  subtitle={'Only the dead have seen the end of war'}/>
                    <div className="wr-content-conatiner">
                        <Profile 
                        title={warriorDetails.name} 
                        img={(warriorDetails.owner ? warriorDetails.owner.avatar_url : '')} 
                        content={warriorDetails.description} link={URL.WAR_ROOM} 
                        list={[ 
                            {label: 'Stars', value: warriorDetails.stargazers_count, icon: 'icon-star'},
                            {label: 'Issues', value: warriorDetails.open_issues_count, icon: 'icon-puzzle-piece'},
                            {label: 'Fork', value: warriorDetails.forks_count, icon: 'icon-user'},
                            {label: 'Pull Request', value: warriorDetails.open_issues_count, icon: 'icon-upload-alt'}]}/>
                    </div>
                </div>
            </section>
            <section className="section section__bg">
                <div className="container">
                    <Subheader title={'Warriors'}  subtitle={'War is what happens when language fails'}/>
                    <div className="wr-card-listing row">
                        {warriorList.user.map((warrior, i) => {
                            return (
                            <div className="col-md-3" key={i}><Card img={warrior.avatar_url} title={warrior.login}></Card></div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

