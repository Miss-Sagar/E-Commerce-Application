import React, {useState} from "react";
import { BannerContainer, WomensProductsContainer, ShowNoOfItems } from "./Women.styles";
import WomenBanner from '../../components/images/banner_women.png';
import { FilterContainer } from "../../components/common/CommonEle.styles";
import Dropdown from '../../components/common/dropdown/Dropdown';
import all_product from "../../all_product";
import GridEle from "../shop/grid/GridEle";
import { ExploreMoreBtn } from "../../components/common/CommonEle.styles";

const Women = () => {

    const [showBtn, setShowBtn] = useState(false);

    let womenCount = all_product.filter((item) => item.category === 'women').length;
    let womensProducts = all_product.filter((item) => item.category === 'women');

    const handleShowItem = () => {
        setShowBtn(true);
    }

    return (
        <>
            <BannerContainer>
                <img style={{width: '100%'}} src={WomenBanner} alt=""/>
            </BannerContainer>
            <FilterContainer>
                <ShowNoOfItems>Showing 1-{!showBtn ? 8 : womensProducts.length} out of {womensProducts.length} products</ShowNoOfItems>
                <Dropdown />
            </FilterContainer>
            <WomensProductsContainer>
                <GridEle products={womensProducts} category={'women'} showExploreMoreBtn={showBtn} setShowBtn={setShowBtn}/>
                {(womenCount > 7 && !showBtn) &&
            <ExploreMoreBtn onClick={handleShowItem}>Explore More</ExploreMoreBtn>
            }
            </WomensProductsContainer>
        </>
    )
}

export default Women;