import { Grid } from '@material-ui/core';
import React, { useState } from 'react'
import MenuAppBar from "../commons/MenuAppBar";


export const HomeScreen = ({history}) => {

    const [rut, setRut] = useState([]);

    return (
        <>
            <MenuAppBar />
            <h2 className='text-center mt-4'>Home :</h2>
            <Grid container className='contenedor' direction='column' alignItems='center' justify='space-between'>

            </Grid>
        </>
    )

}