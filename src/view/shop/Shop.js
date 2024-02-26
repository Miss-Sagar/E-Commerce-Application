import React, { useState } from "react";
import { NewArrivalsCont, LeftDiv, RightDiv, SmallText, BigText, LatestCollectionBtn, PprWomenCont } from './shop.styles';
import HeroImg from '../../components/images/hero_image.png';
import HandImg from '../../components/images/hand_icon.png';
import aeroImg from '../../components/images/arrow.png';
import { Heading } from "../../components/common/CommonEle.styles";
import GridEle from "./grid/GridEle";
import all_product from "../../all_product";
import { ExploreMoreBtn } from "../../components/common/CommonEle.styles";


const Shop = () => {
    const [showBtn, setShowBtn] = useState(false);

    let womenCount = all_product.filter((item) => item.category === 'women').length;
    let womensProducts = all_product.filter((item) => item.category === 'women');

    const handleShowItem = () => {
        setShowBtn(true);
    }

    return (
        <>
            <NewArrivalsCont>
                <LeftDiv>
                    <SmallText>New Arrivals Only</SmallText>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <BigText>new</BigText>
                        <img height='50px' style={{ padding: '20px 10px 10px 10px' }} src={HandImg} alt="" />

                    </div>
                    <BigText>collections</BigText>
                    <BigText>for everyone</BigText>
                    <LatestCollectionBtn>Latest Collection
                        <img style={{ padding: '0px 10px' }} src={aeroImg} alt="" />
                    </LatestCollectionBtn>
                </LeftDiv>
                <RightDiv>
                    <img height="450vh" src={HeroImg} alt="" />

                </RightDiv>
            </NewArrivalsCont>
            <PprWomenCont>
                <Heading>Popular in womens</Heading>
                <div style={{ padding: '20px' }}>
                    <GridEle products={womensProducts} category={'women'} showExploreMoreBtn={showBtn} setShowBtn={setShowBtn} />
                    {(womenCount > 7 && !showBtn) &&
                        <ExploreMoreBtn onClick={handleShowItem}>Explore More</ExploreMoreBtn>
                    }


                </div>

            </PprWomenCont>
        </>
    )
}

export default Shop;