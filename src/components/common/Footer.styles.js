import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 10px;
    color: black;
    background-color: #9EC8B9; 
`

export const MainHeading = styled.div`
    font-size: 40px;
    font-weight: 500;
    color: black;
    text-align: center;
    padding: 20px;
`

export const Heading = styled.div`
    font-size: 20px;
    color: black;
    text-align: center;
    padding: 10px;
`

export const EmailIdContainer = styled.div`
    padding: 3% 30%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`

export const SubscribeBtn = styled.button`
    color: white;
    background-color: black;
    padding: 5px 25px;
    border-radius: 15px;
    margin: 0px 20px;
    cursor: pointer;

    @media screen and (max-width: 720px) {
        padding: 5% 30%;
        margin: 5px 0px;
    }
`
export const BottomCont = styled.div`
    padding: 10px;

`
export const LogoCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

export const ShopperText = styled.div`
    color: grey;
    font-weight: 500;
    font-size: 30px;
    padding: 10px;
`

export const AppLinksCont = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 720px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
`

export const AppLinks = styled.div`
    padding: 10px 20px;
    color: black;
`
export const SocialMeadiaLinks = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`



