import {Button, Grid} from '@material-ui/core';
import React from 'react'
import MenuAppBar from "../commons/MenuAppBar";


export const HomeScreen = ({history}) => {

    // const [rut, setRut] = useState([]);

    const handleLogout = ()=>{
        history.replace('/auth');
    }

    return (
        <>
            <MenuAppBar />
            <h2 className='text-center mt-4'>Home :</h2>
            <Grid container className='contenedor' direction='column' alignItems='center' justify='space-between'>
                <Button color='primary' variant='contained' onClick={handleLogout}>Hola Mundo</Button>
            </Grid>
        </>
    )

}