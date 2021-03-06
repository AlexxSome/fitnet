import {Button, Grid, IconButton, InputAdornment, TextField} from '@material-ui/core';
import './login.css'
import React from 'react'
import { AccountCircle, LockRounded } from '@material-ui/icons';
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {startFacobookLogin, startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state);
    const [formValues, handleInputChange] = useForm({
        email: '',
        password:''
    });

    const {email, password} = formValues;

    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password, history));
    }

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
    }

    const handleFacebookLogin = async ()=>{
        const res = await dispatch(startFacobookLogin());
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
                        <form onSubmit={handleLogin} method="POST">
                            <TextField
                                label="Correo"
                                name="email"
                                onChange={handleInputChange}
                                margin="normal"
                                required
                                InputProps={{startAdornment:(<InputAdornment position="start"><AccountCircle  /></InputAdornment>),}}/>
                            <TextField
                                label="Contrase??a"
                                name="password"
                                onChange={handleInputChange}
                                margin="normal"
                                type='password'
                                required
                                InputProps={{startAdornment:(<InputAdornment position="start"><LockRounded /> </InputAdornment>)}}
                            />
                            <div className='spaceDiv'/>

                            <Button color='primary' type="submit" size="medium" disabled={loading} variant='contained'>Ingresar</Button>
                        </form>
                       <Link to="/auth/register" className="link">Create new account</Link>

                    </div>
                    <Grid container justify='center' spacing={2}>
                        <Grid item>

                            {/* <Button size="large"  onClick={handleFacebookLogin}><IconButton color="primary" size="large"><FacebookIcon size="large" /></IconButton></Button> */}
                            {/* <FacebookLogin size="small" textButton="Ingresar con Facebook" onClick={handleFacebookLogin} cssClass="facebook-button-class"/> */}
                            <Button size="small" type="submit" color="primary" onClick={handleFacebookLogin} variant='contained' className="facebook-button-class"> <FacebookIcon className="facebook-icon-class" size="large" /> Ingresar con Facebook</Button>
                            <div className='spaceDiv'/>
                            <GoogleButton
                                type="dark"
                                
                                label="Ingresar con Google"
                                onClick={ handleGoogleLogin }
                            />   
                            <div className='spaceDiv'/>             
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                    <div />
                </Grid>

            </Grid>
        </div>
    )
}
