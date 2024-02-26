import React, { useState } from "react";
import { BannerContainer, ShowNoOfItems, MensProductsContainer } from "./Men.styles";
import MensBanner from '../../components/images/banner_mens.png'
import { FilterContainer } from '../../components/common/CommonEle.styles';
import Dropdown from "../../components/common/dropdown/Dropdown";
import GridEle from '../../view/shop/grid/GridEle';
import all_product from "../../all_product";
import { ExploreMoreBtn } from "../../components/common/CommonEle.styles";


const Men = () => {

    const [showBtn, setShowBtn] = useState(false);

    let menCount = all_product.filter((item) => item.category === 'men').length;
    let mensProducts = all_product.filter((item) => item.category === 'men');

    const handleShowItem = () => {
        setShowBtn(true);
    }



    return (
        <>
            <BannerContainer>
                <img style={{width: '100%'}} src={MensBanner} />
            </BannerContainer>
            <FilterContainer>
                <ShowNoOfItems>Showing 1-{!showBtn ? 8 : mensProducts.length} out of {mensProducts.length} products</ShowNoOfItems>
                <Dropdown />
            </FilterContainer>
            <MensProductsContainer>
                <GridEle products={mensProducts} category={'men'} showExploreMoreBtn={showBtn} setShowBtn={setShowBtn} />
                {(menCount > 7 && !showBtn) &&
                   <ExploreMoreBtn onClick={handleShowItem}>Explore More</ExploreMoreBtn>
                }
            </MensProductsContainer>
            {/* {(menCount > 7 && !showBtn) &&
                   <div style={{padding: '10px 20px', border: '1px solid green'}}><ExploreMoreBtn onClick={handleShowItem}>Explore More</ExploreMoreBtn></div> 
                } */}
        </>
    )
}

export default Men;