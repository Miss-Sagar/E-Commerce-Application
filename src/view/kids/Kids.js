import React, {useState} from "react";
import { BannerContainer, KidsProductsContainer, ShowNoOfItems } from "./Kids.styles";
import KidsBanner from '../../components/images/banner_kids.png';
import { FilterContainer } from "../../components/common/CommonEle.styles";
import Dropdown from '../../components/common/dropdown/Dropdown';
import all_product from "../../all_product";
import GridEle from "../shop/grid/GridEle";
import { ExploreMoreBtn } from "../../components/common/CommonEle.styles";


const Kids = () => {

    const [showBtn, setShowBtn] = useState(false);

    let kidsCount = all_product.filter((item) => item.category === 'kid').length;
    let kidsProducts = all_product.filter((item) => item.category === 'kid');

    const handleShowItem = () => {
        setShowBtn(true);
    }

    return (
        <>
            <BannerContainer>
                <img style={{width: '100%'}} src={KidsBanner} alt=""/>
            </BannerContainer>
            <FilterContainer>
                <ShowNoOfItems>Showing 1-{!showBtn ? 8 : kidsProducts.length} out of {kidsProducts.length} products</ShowNoOfItems>
                <Dropdown />
            </FilterContainer>
            <KidsProductsContainer>
                <GridEle products={kidsProducts} category={'kid'} showExploreMoreBtn={showBtn} setShowBtn={setShowBtn}/>
                {(kidsCount > 7 && !showBtn) &&
            <ExploreMoreBtn onClick={handleShowItem}>Explore More</ExploreMoreBtn>
            }
            </KidsProductsContainer>

        </>
    )
}

export default Kids;