import styled from "styled-components";

export const ItemInfoBreadCrumb = styled.div`
    padding: 20px 10px;
    // border: 3px solid green;
`

export const BreadCrumbValue = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    font-weight: 500;
    font-size: 20px;

    @media screen and (max-width: 720px) {
        flex-direction: column;
        text-align: left;
        align-items: self-start;
    }
`

export const ItemInfoMainCont = styled.div`
    border: 2px solid red;
    display: flex;
    text-align: center;
    align-items: center;
    // padding: 10px;

    @media screen and (max-width: 920px){
        flex-direction: column;
    }
`

export const ItemInfoSubCont = styled.div`
    padding: 10px 20px;
    border: 2px solid green;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 920px){
        flex-direction: column;
    }
`

export const MultiImgCont = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid purple;
    width: 40%;

    @media screen and (max-width: 920px){
        text-align : center;
        align-items: center;
        width: 100%; 
    }
`

export const SingleImgCont = styled.div`
    border: 1px solid orange;
    width: 60%;

    @media screen and (max-width: 920px){
        text-align : center;
        align-items: center;
        width: 100%; 
    }
`

export const SmallImgContainer = styled.div`
    border: 2px solid red;
    padding: 5px;
    text-align: center;
    // background-color: grey;
`

export const Heading = styled.div`
    font-size: 30px;
    font-weight: 400;
    color: black;
    text-align: left;
    padding: 20px;
`

export const Ratings = styled.div`
    padding: 0px 20px;
    color: orange;
`

export const ProductPrice = styled.div`
    padding: 20px;
    font-weight: 700;
    text-align: left;
    font-size: 25px;
`

export const ItemDescription = styled.div`
    padding: 0px 20px;
    color: grey;
    font-size: 20px;
    text-align: left;
`

export const CategoryAndTags = styled.div`
    display: flex;
    padding: 5px 20px;
`

export const Text = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: black;
`

export const Value = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: black;
    padding: 0px 10px;
`