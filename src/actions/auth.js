import {types} from '../types/types';
import {firebase, googleAuthProvider} from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
       setTimeout(()=>{
           dispatch(login(0,''));
       },3500);
    }
}

export const startGoogleLogin =() =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName, user.email)
                );
            });
    }
}

export const login = (uid, displayName, email) => ({
    type: types.login,
    payload: {uid, displayName, email}
})


