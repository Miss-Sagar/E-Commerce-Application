import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: ${(props) => props.screen === "laptop" ? "space-around" : "space-between"};
    // justify-content: space-around;

    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #092635;
`

export const LeftContainer = styled.div`
    display: flex;
    cursor: pointer;
`

export const ShopperText = styled.div`
    color: grey;
    font-weight: 500;
    font-size: 30px;
    padding: 10px;
`

export const MiddleContainer = styled.div`
    display: flex;
    justify-content: space-between; 
`
export const MiddleContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between; 
    background-color: #0c1d26b0;
    width: 100vw;
    position: absolute;
    top: 105%;
    left: 0;
`

export const TabLinks = styled.div`
    padding: 20px;
`

export const RightContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: ${(props) => props.screen === 'mobile' ? "0px 20px" : "0px"}
`

export const LoginBtn = styled.button`
    border: 1px solid grey;
    color: black;
    padding: 5px 25px;
    border-radius: 15px;
    margin: 0px 20px;
    cursor: pointer;
`

export const CartImgContainer = styled.div`
    position: relative;
    color: white;
`

export const CartItemValue = styled.div`
    // padding: 0.5px;
    text-align: center;
    color: white;
    background-color: #d00d0d;
    border-radius: 100%;
    position: absolute;
    top: -5px;
    right: -15px;
    bottom: 15px;
    left: 20px;
    // font-size: 20px;
`