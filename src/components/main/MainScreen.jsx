import React, { useState } from 'react';
import MenuAppBar from '../commons/MenuAppBar';
import { HomeScreen } from '../home/HomeScreen';
import { ProfileScreen } from '../profile/ProfileScreen';
import { ScheduleScreen } from '../schedule/ScheduleScreen';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export const MainScreen = ({isAuthenticated, history}) => {

    const [showHome, setShowHome]           = useState(false);
    const [showSchedule, setShowSchedule]   = useState(true);
    const [showProfile, setShowProfile]     = useState(false);

    console.log("Auth",isAuthenticated);

    return (
        <>
     
            <MenuAppBar />

        </>
    )
}

MainScreen.propTypes = {
    isAuthenticated: PropTypes.func.isRequired
}