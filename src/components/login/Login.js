import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { MainContainer, LoginContainer, MainHeading, Heading, FormContainer, Labels, ShowPasswordContainer, SmallText,
     LoginBtn, RegAndSignUpLink } from "./Login.styles";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAuthenticationState, setUserAccessToken} from '../../redux/actions/AutenticationAction';

const Login = (props) => {
    const history = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })

    useEffect(() => {

    })

    const handleShowPassword = (e) => {
            setShowPassword(!showPassword);
    }

    const handleLink = (e) => {
       history('/register');
    }

    const handleLogin = () => {
        try{
            axios.post("http://localhost:5000/login", userData).then((res) => {
                console.log("<<<<<<<<<<<<", res.data);
                if(res.status === 200){
                    alert(" login successful");
                    props.setAuthenticationState(true);
                    props.setUserAccessToken(res.data.accessToken);
                    localStorage.setItem("accessToken",res.data.accessToken)
                    history('/');
                }
            })
        } catch(err){
            console.err(err);
        }
    };

    const handleChange = (e) => {
        const { name, value} = e.target;
        setUserData({
            ...userData,
            [name] : value
        })
    };
    

    return (
        <MainContainer>
            <LoginContainer>
                <MainHeading>
                    Login
                </MainHeading>
                <FormContainer>
                    <Labels>
                        <Heading> Enter your Email:</Heading>
                    </Labels>
                    <Labels>
                        <TextField fullWidth id="filled-basic" label="Email" name="email"  variant="filled" onChange={handleChange} />
                    </Labels>
                    <Labels>
                        <Heading> Enter your Password:</Heading>
                    </Labels>
                    <Labels >
                        <TextField fullWidth id="filled-basic" label="Password" name="password" variant="filled"  type={showPassword ? "text" : "password"} onChange={handleChange}/>
                    </Labels>
                    <ShowPasswordContainer>
                        <Checkbox style={{ fontSize: '15px' }} checked={showPassword} onChange={(e) => handleShowPassword(e)} />
                        <SmallText style={{ padding: '10px 5px' }}>Show Password</SmallText>
                    </ShowPasswordContainer>
                    <LoginBtn >
                        <Button style={{ backgroundColor: '#d00d0d' }} fullWidth variant="contained" onClick={handleLogin}>Login</Button>
                    </LoginBtn>
                    <RegAndSignUpLink>
                        <SmallText>
                        Create a new account?
                        </SmallText>
                        <SmallText onClick={handleLink} id='RegisterLink' style={{ color: '#d00d0d', fontWeight: '500', cursor: 'pointer' }}>
                            Register
                        </SmallText>
                    </RegAndSignUpLink>
                </FormContainer>
            </LoginContainer>
        </MainContainer>
    )
}


const mapStateToProps = (state) => ({
    userAuthentication: state.AuthenticationInfo.userAuthentication
})

const mapDispatchToProps = (dispatch) => ({
    setAuthenticationState: (value) => dispatch(setAuthenticationState(value)),
    setUserAccessToken: (token) => dispatch(setUserAccessToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps) (Login);