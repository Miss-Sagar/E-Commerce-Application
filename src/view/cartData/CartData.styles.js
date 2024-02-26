import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 5%;
`

export const Heading = styled.div`
    font-size: 30px;
    font-weight: 500;
    color: black;
    padding: 10px;
`

export const PromoCodeCont = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`

export const SubmitBtn = styled.div`
    color: white;
    background-color: black;
    padding: 15px 20px;
    cursor: pointer;
    align-items: center;
    
    @media screen and (max-width: 720px) {
        margin: 5px 0px
    }
`