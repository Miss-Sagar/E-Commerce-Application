import React, { useState } from "react";
import axios from 'axios';
import './register.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { MainContainer, RegisterContainer, MainHeading, Heading, FormContainer, Labels, ShowPasswordContainer, SmallText,
     RegisterBtn, RegAndSignUpLink } from "./register.styles";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAuthenticationState } from '../../redux/actions/AutenticationAction';

const Register = () => {
    const history = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleShowPassword = (e) => {
            setShowPassword(!showPassword);
    }

    const handleLink = (e) => {
        history('/login');
    }

    const handleChange = (e) =>{
        const { name, value} = e.target;
        setUserData({
            ...userData,
            [name] : value
        })
    }

    const handleRegister = () => {
        const { username, email, password} = userData;
        if(username && email && password){
            axios.post("http://localhost:5000/register", userData)
            .then((res) => {
                console.log("response is:", res);
                if(res.status === 201){
                    alert("User registered Successfully");
                    history('/login');
                }
            })
        }else{
            alert("invalid details")
        }
    };
    

    return (
        <MainContainer>
            <RegisterContainer>
                <MainHeading>
                    Register
                </MainHeading>
                <FormContainer>
                    
                    <Labels>
                        <Heading>Username</Heading>
                    </Labels>
                        <Labels>
                            <TextField fullWidth id="filled-basic" label="Username" name="username"  variant="filled" onChange={handleChange}/>
                        </Labels>
                    
                    <Labels>
                        <Heading> Enter your Email:</Heading>
                    </Labels>
                    <Labels>
                        <TextField fullWidth id="filled-basic" label="Email" name="email" variant="filled" onChange={handleChange} />
                    </Labels>
                    <Labels>
                        <Heading> Enter your Password:</Heading>
                    </Labels>
                    <Labels >
                        <TextField fullWidth id="filled-basic" label="Password" name="password"  variant="filled"  type={showPassword ? "text" : "password"} onChange={handleChange}/>
                    </Labels>
                    <ShowPasswordContainer>
                        <Checkbox style={{ fontSize: '15px' }} checked={showPassword} onChange={(e) => handleShowPassword(e)} />
                        <SmallText style={{ padding: '10px 5px' }}>Show Password</SmallText>
                    </ShowPasswordContainer>
                    <RegisterBtn >
                        <Button style={{ backgroundColor: '#d00d0d' }} fullWidth variant="contained" onClick={handleRegister}>Register</Button>
                    </RegisterBtn>
                    <RegAndSignUpLink>
                        <SmallText>
                        All ready have an account? 
                        </SmallText>
                        <SmallText onClick={handleLink} id='RegisterLink' style={{ color: '#d00d0d', fontWeight: '500', cursor: 'pointer' }}>
                             Login
                        </SmallText>
                    </RegAndSignUpLink>
                </FormContainer>
            </RegisterContainer>
        </MainContainer>
    )
}


const mapStateToProps = (state) => ({
    // userAuthentication: state.CurrentAuthState.userAuthentication
})

const mapDispatchToProps = (dispatch) => ({
    // setAuthenticationState: (value) => dispatch(setAuthenticationState(value))
})

export default connect(mapStateToProps, mapDispatchToProps) (Register);