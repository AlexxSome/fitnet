import React from 'react';
import '../login.css';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";

const margin  = { marginBottom: 10, marginTop: 10,  }

export const FormSignup = () => {
    return(
        <form>
            <TextField fullWidth label='Name' placeholder="Enter your name" style={margin}/>
            <TextField fullWidth label='Email' placeholder="Enter your email" style={margin}/>
            <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={margin}/>
            <TextField fullWidth label='Password' placeholder="Enter your password" style={margin}/>
            <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" style={margin}/>
            <FormControl component="fieldset" style={margin} >
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
            <TextField fullWidth label='Age' placeholder="Enter your age" type="number" style={margin}/>
            <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
                style={margin}
            />
            <Button type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
    )
};
