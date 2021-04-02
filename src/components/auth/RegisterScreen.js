import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel, Grid,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import {Link} from "react-router-dom";

const marginGender  = { marginBottom: 15, marginTop: 15,  }

export const RegisterScreen = () => {
    return (
    <div >
        <Grid container className='contenedor'>
            <Grid item xs={12} sm={6}>
                <img
                    src="https://www.mensjournal.com/wp-content/uploads/mf/the_15_most_important_exercises_for_men_main.jpg?quality=86&strip=all"
                    style={{width:"100%", height:"100vh", objectFit:"cover"}}
                    alt="brand"
                />
            </Grid>
            <Grid container className='itemRight' item xs={12} sm={6} alignItems='center' direction='column' justify='space-between'>
                <div />
                <div className='containerTextRegister'>
                    <h3 className="tittle">Register new user</h3>
                    <form>
                        <TextField fullWidth label='Name' placeholder="Enter your name" />
                        <TextField fullWidth label='Email' placeholder="Enter your email" />
                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <TextField fullWidth label='Password' placeholder="Enter your password"/>
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                        <FormControl component="fieldset" style={marginGender} >
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='Age' placeholder="Enter your age" type="number" />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions."
                        />
                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                    </form>

                    <Link to="/auth/login" className="link">Already registered?</Link>
                </div>
                <div />
            </Grid>

        </Grid>
    </div>
    )
}
