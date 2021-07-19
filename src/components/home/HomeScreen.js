import {Button, Grid, Paper} from '@material-ui/core';
import React from 'react'
import MenuAppBar from "../commons/MenuAppBar";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Swal from 'sweetalert2'

const useStyles = makeStyles({
    root:{
        minWidth: '70%',
        borderRadius:'1.5%',
        backgroundColor: '#ddddddbb',
        paddingTop: '4vh',
        paddingBottom:'4vh',
        paddingInline: '2vw', 
    },
    button:{
        marginTop: '2vh',
        textAlign: 'center',

    }

});

export const HomeScreen = ({history}) => {
    const classes       =   useStyles();
    const state         =   useSelector(state => state);
    const currentDate   =   new Date();
    const schedulerData = [
        { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
        { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
    ];
      
    const handleButton = (e) => {
        Swal.fire({
            title: 'Your Data!',
            text: `Name : ${state.auth.name}`,
            icon: 'success',
            confirmButtonText: 'Yes',
            showCancelButton: true
        }).then(function () {
            console.log(state)  
        })

        
    }

    // const handleLogout = ()=>{
    //     history.replace('/auth');
    // }
    console.log(state);
    return (
        <>
            <MenuAppBar />
            {/* <h2 className='text-center mt-4'>Home :</h2> */}
            <Grid container direction='column' alignItems='center' justify='space-between'>
                {/* <Button color='primary' variant='contained' onClick={handleLogout}>Hola Mundo</Button> */}
                <Paper elevation={4} className={classes.root} xs={12} square>
                    <p>Your name : {JSON.stringify(state.auth.name)}</p>
                    <p>Your email : {JSON.stringify(state.auth.email)}</p>
                    <p>Your uid : {JSON.stringify(state.auth.uid)}</p>
                   <div className={classes.button}>
                       <Button color='primary' variant='contained' onClick={handleButton}>Show me</Button>
                   </div>
                    
                </Paper>
                <div/>
                <div/>
                                
            </Grid>
            
           

        </>
    )

}