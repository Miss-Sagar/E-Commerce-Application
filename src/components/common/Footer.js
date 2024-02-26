import React from 'react';
import {
  MainContainer, MainHeading, Heading, EmailIdContainer, SubscribeBtn, BottomCont, LogoCont, AppLinksCont, AppLinks,
  SocialMeadiaLinks, ShopperText
} from './Footer.styles';
import TextField from '@mui/material/TextField';
import Logo from '../images/logo.png';
import InstaLogo from '../images/instagram_icon.png';
import Pintester from '../images/pintester_icon.png';
import Whatsapp from '../images/whatsapp_icon.png';

export default function Footer() {
  return (
    <MainContainer>
      <MainHeading>Get Exclusive Offers On Your Mail</MainHeading>
      <Heading>Subscribe to our newsletter and stay updated</Heading>
      <EmailIdContainer>
        <TextField fullWidth placeholder='Your Email Id'></TextField>
        <SubscribeBtn>Subscribe</SubscribeBtn>
      </EmailIdContainer>
      <BottomCont>
        <LogoCont>
          <img height="50px" src={Logo} alt=""/>
          <ShopperText>Let's Shop</ShopperText>
        </LogoCont>
        <AppLinksCont>
          <AppLinks>Company</AppLinks>
          <AppLinks>Products</AppLinks>
          <AppLinks>Offices</AppLinks>
          <AppLinks>About</AppLinks>
          <AppLinks>Contact</AppLinks>
        </AppLinksCont>
        <SocialMeadiaLinks>
         <div style={{padding: '10px 20px', cursor: 'pointer'}}><img src={InstaLogo} alt=""/></div> 
         <div style={{padding: '10px 20px', cursor: 'pointer'}}><img src={Pintester} alt=""/></div> 
         <div style={{padding: '10px 20px', cursor: 'pointer'}}><img src={Whatsapp} alt=""/></div> 
        </SocialMeadiaLinks>
      </BottomCont>
    </MainContainer>
  )
}
