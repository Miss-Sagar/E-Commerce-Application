import React, {useState, useEffect} from "react";
import { LeftContainer, MainContainer, MiddleContainer, RightContainer, ShopperText, TabLinks, LoginBtn, 
    CartImgContainer, CartItemValue, MiddleContainerMobile } from "./Navbar.styles";
import Logo from '../../components/images/logo.png';
import WhiteCartIcon from '../../components/images/WhiteCartIcon.png';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthenticationState, setUserAccessToken } from '../../redux/actions/AutenticationAction';
import { setCartProductItems } from "../../redux/actions/CartProductAction";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";

const Navbar = (props) => {
    const [activeTab, setActiveTab] = useState("shop");
    const [currScreen, setCurrScreen] = useState("laptop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const history = useNavigate();
    const accessToken = props.userAccessToken;

    const fetchCartProducts = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/getCartProducts",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
            );
          // setCartProducts(response.data);
          props.setCartProductItems(response.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };

      useEffect(() => {
        fetchCartProducts();
      }, []);

    const handleChangleActiveTab = (e) => {
        setActiveTab(e.target.innerText.toLowerCase());
        if(currScreen === 'mobile'){
            setIsMenuOpen(false);
        }
    }

    const handleLoginClick = () => {
        history('/login');
    }

    const handleLogOutClick = () => {
        props.setAuthenticationState(false);
        props.setUserAccessToken("");
        history('/');
    }

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleCartCilck = () => {
        history('/cartData');
    }

    useEffect(() => {
        console.log("<<<<<<")
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 720) {
                setCurrScreen("mobile");
            } else {
                setCurrScreen("laptop");
            }
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <MainContainer screen={currScreen}>
                {
                    currScreen === "laptop" ? 
                     <>
                     <LeftContainer>
                            <img height="50px" src={Logo} alt="" />
                            <ShopperText>Let's Shop</ShopperText>
                        </LeftContainer>
                        <MiddleContainer>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'shop' ? '3px solid red' : '3px solid transparent' }} to="/">Shop</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'men' ? '3px solid red' : '3px solid transparent' }} to="/men">Men</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'women' ? '3px solid red' : '3px solid transparent' }} to="/women">Women</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'kids' ? '3px solid red' : '3px solid transparent' }} to="/kids">Kids</Link>
                                </TabLinks>
                            </MiddleContainer>
                            </>  :
                    <div style={{padding: '20px 30px', position: 'relative'}}>
                        <MenuIcon onClick={handleMenuClick} style={{color: 'white', cursor: 'pointer'}} />
                        {isMenuOpen && <MiddleContainerMobile>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'shop' ? '3px solid red' : '3px solid transparent' }} to="/">Shop</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'men' ? '3px solid red' : '3px solid transparent' }} to="/men">Men</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'women' ? '3px solid red' : '3px solid transparent' }} to="/women">Women</Link>
                                </TabLinks>
                                <TabLinks>
                                    <Link onClick={(e) => handleChangleActiveTab(e)} style={{ color: 'white', textDecoration: 'none', borderBottom: activeTab === 'kids' ? '3px solid red' : '3px solid transparent' }} to="/kids">Kids</Link>
                                </TabLinks>
                            </MiddleContainerMobile>
}
                    </div>
                }
                
                <RightContainer screen={currScreen}>
                    {
                        !props.userAuthentication ? 
                        <LoginBtn onClick={handleLoginClick}>Login</LoginBtn> : 
                        <LoginBtn onClick={handleLogOutClick}>LogOut</LoginBtn>
                    }
                    
                    <CartImgContainer onClick={handleCartCilck} style={{cursor: 'pointer'}}>
                    <img height="30px"  src={WhiteCartIcon} alt=""/>
                    <CartItemValue>{props.totalCartProducts.length}</CartItemValue>
                    </CartImgContainer>
                </RightContainer>
            </MainContainer>
            <Outlet />

        </>
    )
}

const mapStateToProps = (state) => ({
    totalCartProducts: state.CartItemInfo.totalCartProducts,
    userAuthentication: state.AuthenticationInfo.userAuthentication,
    userAccessToken: state.AuthenticationInfo.userAccessToken
})

const mapDispatchToProps = (dispatch) => ({
    setAuthenticationState: (value) => dispatch(setAuthenticationState(value)),
    setUserAccessToken: (value) => dispatch(setUserAccessToken(value)),
    setCartProductItems: (items) => dispatch(setCartProductItems(items))
})

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);