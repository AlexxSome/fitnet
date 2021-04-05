import React, {useState} from 'react';
import validator from 'validator';
import '../login.css';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel, FormHelperText,
    FormLabel, Input, InputLabel,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import {useForm} from "../../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {removeError, setError} from "../../../actions/ui";

const margin  = { marginBottom: 10, marginTop: 10,  }

export const FormSignup = () => {
    const dispatch                          = useDispatch();
    const {msgError, input}                 = useSelector(state => state.ui);
    const [conditions, setConditions]       = useState(false);
    const [gender, setGender]               = useState('male');
    const [formValues, handleInputChange]   = useForm({
        name:           ' ',
        email:          ' ',
        phoneNumber:    ' ',
        password:       ' ',
        password2:      ' ',
        age :           0
    })

    const {name, email, phoneNumber, password, password2, age} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isValidForm()){
            console.log(name, email, phoneNumber, password, password2, gender, age, conditions);
        }

    }

    const handleGenderChange = (event) => {
        event.preventDefault();
        setGender(event.target.value);
    };

    const handleConditions = (e) => {
        e.preventDefault();
        setConditions(!conditions);
    }

    const isValidForm = () =>{

        if(name.trim().length <= 1 ){
            dispatch(setError("Name is required", "name"));
            return false;
        }else if(email === undefined || !validator.isEmail(email)){
            dispatch(setError("Email not valid", "email"));
            return false;
        }else if(password === undefined || password !== password2){
            dispatch(setError("Passwords slould be match", "password2"));
            return false;
        }else if(password === undefined || password.length < 7){
            dispatch(setError("Password slould be least 7 characters", "password"));
            return false;
        }else if(age<1 || age > 125){
            dispatch(setError("Enter valid age range", "age"));
            return false;
        }else if(!conditions){
            dispatch(setError("Accept terms and conditions","conditions"));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return(

        <form onSubmit={handleRegister} >

            <TextField fullWidth
                       label='Name'
                       name="name"
                       onChange={handleInputChange}
                       placeholder="Enter your name"
                       style={margin}
                       error={Boolean(input === 'name')}
                       helperText={input === 'name' && (msgError)}
                       variant="outlined"
            />

            <TextField fullWidth
                       label='Email'
                       name="email"
                       onChange={handleInputChange}
                       placeholder="Enter your email"
                       style={margin}
                       variant="outlined"
                       error={Boolean(input === 'email')}
                       helperText={input === 'name' && (msgError)}
                       required
            />

            <TextField fullWidth
                       label='Phone Number'
                       name="phoneNumber"
                       onChange={handleInputChange}
                       placeholder="Enter your phone number"
                       style={margin}
                       variant="outlined"
                       error={input === 'phoneNumber'}
                       helperText={input === 'name' && (msgError)}
                       required
            />
            <TextField fullWidth
                       label='Password'
                       name="password"
                       onChange={handleInputChange}
                       type="password"
                       placeholder="Enter your password"
                       style={margin}
                       error={input === 'password'}
                       helperText={input === 'password' && (msgError)}
                       variant="outlined"
                       required
            />
            <TextField fullWidth
                       label='Confirm Password'
                       name="password2"
                       onChange={handleInputChange}
                       type="password"
                       placeholder="Confirm your password"
                       style={margin}
                       error={input === 'password2'}
                       helperText={input === 'password2' && (msgError)}
                       variant="outlined"
                       required
            />
            <TextField fullWidth
                       label='Age'
                       name="age"
                       onChange={handleInputChange}
                       placeholder="Enter your age"
                       type="number"
                       style={margin}
                       error={Boolean(input === 'age')}
                       helperText={input === 'age' && (msgError)}
                       variant="outlined"
                       required
            />

            <FormControl component="fieldset"  style={margin} >
                <FormLabel component="legend" >Gender</FormLabel>
                    <RadioGroup aria-label="gender" value={gender} onChange={handleGenderChange} name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel  value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="no-binary" control={<Radio />} label="Non-Binary" />
                    </RadioGroup>
            </FormControl>

            <FormControlLabel
                control={<Checkbox value={conditions} onClick={handleConditions}/>}
                label="I accept the terms and conditions."
                style={margin}
            />
            <Button type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
    )
};
