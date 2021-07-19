import { Button, Grid } from '@material-ui/core';
import React from 'react';
import Swal from 'sweetalert2';
import MenuAppBar from '../commons/MenuAppBar';

export const ProfileScreen = () => {


    
    const handleButton = (e) => {
        Swal.fire({
            title: 'Course A2!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Yes'
        })
    }

    return (
        <>
        <MenuAppBar />
        <Grid container direction='column' alignItems='center' justify='space-between'>
            <Button color='primary' variant='contained' onClick={handleButton}>Hola Mundo</Button>

            <div/>

                        
        </Grid>

        </>
    )
}
