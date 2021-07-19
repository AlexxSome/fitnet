import React from 'react'
import { Paper } from '@material-ui/core'
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import {  ViewState } from '@devexpress/dx-react-scheduler';
import './schedule.css';
import MenuAppBar from '../commons/MenuAppBar';

export const ScheduleScreen = () => {
    const currentDate   =   new Date();
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    ];

    return (
        <>
        <MenuAppBar />
        <div className="scheduleView">
        <Paper elevation={4}>
            <Scheduler data={schedulerData} 
            firstDayOfWeek={1} 
            defaultCurrentDate={currentDate}
            defaultCurrentView="workWeek"
            startDayHour={7}
            endDayHour={23}> 

            <ViewState  />

            
                <WeekView startDayHour={5} endDayHour={24} startDate={currentDate}>

                </WeekView>

                <Appointments />
            </Scheduler>                
        </Paper>
        </div>
        </>
    )
}
