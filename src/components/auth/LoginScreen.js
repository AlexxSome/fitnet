import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import './login.css'
import React from 'react'
import { AccountCircle, LockRounded } from '@material-ui/icons';
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
import {login, startLoginEmailPassword} from "../../actions/auth";

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password:''
    });

    const {email, password} = formValues;

    const handleLogin = ()=>{
        // history.replace('/');
        dispatch(startLoginEmailPassword(email,password));
    }

    return (
        <div >
            <Grid container className='contenedor'>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://i.pinimg.com/564x/16/08/24/1608243ae65d90c5e1769c14c44ce12b.jpg"
                        style={{width:"100%", height:"100vh", objectFit:"cover"}}
                        alt="brand"
                    />
                </Grid>
                <Grid container className='itemRight' item xs={12} sm={6} alignItems='center' direction='column' justify='space-between'>
                    <div />
                    <div className='containerTextlogin'>
                        <Grid container  justify='center'>
                            <img
                                src="https://thumbs.dreamstime.com/b/logotipo-del-club-de-fitness-115039443.jpg"
                                width={200}
                                alt='logo'
                            />
                        </Grid>
                        <TextField
                            label="Correo"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            margin="normal"
                            InputProps={{startAdornment:(<InputAdornment position="start"><AccountCircle  /></InputAdornment>),}}/>
                        <TextField
                            label="Contraseña"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            margin="normal"
                            type='password'
                            InputProps={{startAdornment:(<InputAdornment position="start"><LockRounded /> </InputAdornment>)}}
                        />
                        <div className='spaceDiv'/>
                        <Button color='primary' variant='contained' onClick={handleLogin}>Ingresar</Button>
                    </div>
                    <Grid container justify='center'>
                        <Grid item>
                            <Button className='mx-1' variant='outlined' color='primary' href='https://google.cl/'>comunidad Fitnet</Button>
                        </Grid>
                        <Grid item>
                            <Button className='mx-1' variant='outlined' color='primary'>Recordar contraseña</Button>
                        </Grid>
                    </Grid>
                    <div />
                </Grid>

            </Grid>
        </div>
    )
}
