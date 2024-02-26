import styled from "styled-components";
import Button from '@mui/material/Button';

export const SelectSizeContainer = styled.div`
    padding : 20px;
`

export const Heading = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-align: left;
    // padding: 20px;
`
export const SelecteBtnContainer = styled.div`
    padding-top: 20px;
`

export const SelectBtn = styled(Button)`
    border: 1px solid transparent !important;
    background-color: white !important;
    color: black !important;
    border-radius: 0px !important;
    margin-right: 10px !important;

`

export const AddToCartBtn = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: #d00d0d;
    color: white;
    font-weight: 400;
    width: 20%;
    cursor: pointer;
    text-align: center;
`