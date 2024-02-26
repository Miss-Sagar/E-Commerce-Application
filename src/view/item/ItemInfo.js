import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
    ItemInfoBreadCrumb, BreadCrumbValue, ItemInfoMainCont, MultiImgCont, SingleImgCont, Heading, Ratings, ProductPrice, ItemDescription,
    CategoryAndTags, Text, Value, SmallImgContainer, ItemInfoSubCont
} from './ItemInfo.styles'
import { useLocation } from 'react-router-dom';
import SelectSize from './SelectSize';
import aeroImg from '../../components/images/breadcrum_arrow.png';

export default function ItemInfo() {
    const location = useLocation();
    // console.log("location", location);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // const [rating, setRating] = useState(initialRating || 0);

    const handleRatingChange = newRating => {
        // setRating(newRating);
        // if (onRatingChange) {
        //   onRatingChange(newRating);
        // }
    };

    const str = location.state.category;
    const currentCategory = str[0].toUpperCase() + str.slice(1);

    return (
        <div>
            <ItemInfoBreadCrumb>
                <BreadCrumbValue>
                    Home
                    <div style={{ padding: '2px 5px 0px 5px' }}><img src={aeroImg} alt=""/></div>
                    {currentCategory}
                    <div style={{ padding: '2px 5px 0px 5px' }}><img src={aeroImg} alt=""/></div>
                    {location.state.name}
                </BreadCrumbValue>
            </ItemInfoBreadCrumb>
            <ItemInfoMainCont>
                <ItemInfoSubCont>
                    <MultiImgCont>
                        <div><img height="170vh" src={location.state.image} alt=""/></div>
                        <div><img height="170vh" src={location.state.image} alt=""/></div>
                        <div><img height="170vh" src={location.state.image} alt=""/></div>
                    </MultiImgCont>
                    <SingleImgCont>
                    <img max-height="100%" src={location.state.image} alt=""/>
                    </SingleImgCont>
                </ItemInfoSubCont>
                <div style={{border: '2px solid green', width: '100%'}}>
                <Grid style={{ backgroundColor: '', border: '2px solid purple' }} item xs={12} md={12} lg={6}>
                            {/* <Item> #EEF0E5 */}
                            <Heading>{location.state.name}</Heading>

                            <Ratings>
                                {/* {[...Array(maxRating)].map((_, index) => ( */}
                                <span
                                    //   key={index}
                                    onClick={() => handleRatingChange()}
                                //   style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'grey' }}
                                >
                                    <div style={{ display: 'flex' }}>
                                        &#9733;&#9733;&#9733;&#9733;&#9733;
                                    </div>
                                    {/* Unicode character for a star */}
                                </span>
                                {/* ))} */}
                            </Ratings>
                            <ProductPrice>${location.state.new_price}</ProductPrice>
                            <ItemDescription>
                                A light weight, usually knitted, pullover shirt close fitting and with a round neckline
                                and short sleeves, worn as an under shirt or outer garment.
                            </ItemDescription>

                            <SelectSize location={location}/>
                            <CategoryAndTags>
                                <Text>Category:</Text>
                                <Value>women</Value>
                            </CategoryAndTags>
                            <CategoryAndTags>
                                <Text>Tags:</Text>
                                <Value>t-shirt</Value>
                            </CategoryAndTags>
                            {/* </Item> */}
                        </Grid>
                </div>
            </ItemInfoMainCont>

        </div>
    )
}