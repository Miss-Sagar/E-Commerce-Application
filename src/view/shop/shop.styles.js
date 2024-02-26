import styled from "styled-components";

export const NewArrivalsCont = styled.div`
    background-color: #f6dce0;
    display: flex;
    align-items: center;
    // justify-content: space-around;

    @media screen and (max-width: 720px){
        flex-direction: column;
    }
` 
export const LeftDiv = styled.div`
    width: 100%;
    padding: 20px 0px 20px 60px;
    // border: 1px solid red;
    margin-left: 40px; 
    float: right;
`

export const SmallText = styled.div`
    color: black;
    font-size: 15px;
    font-weight: 500;
`

export const BigText = styled.div`
    color: black;
    font-size: 60px;
    font-weight: 500;
`

export const LatestCollectionBtn = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #d00d0d;
    color: white;
    font-weight: 400;
    width: 35%;
    cursor: pointer;
`

export const RightDiv = styled.div`
    width: 100%;
    padding: 20px 30px;
    // border: 1px solid red;
    text-align: center;
`

export const PprWomenCont = styled.div`
    background-color: #d8d4d4;
`
