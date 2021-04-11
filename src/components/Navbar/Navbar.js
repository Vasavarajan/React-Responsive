import React ,{useState,useEffect} from 'react';
import {CgClose,CgMenuRight } from 'react-icons/cg'
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import {Nav, NavbarContainer,NavLogo,NavIcon,MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink} from './NavbarElements';
import logo from '../../images/logo.png';


const Navbar = () => {
  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);
  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu} >
                <NavIcon>
                  <img src={logo}  height="60"alt="logo"/>
                </NavIcon>
                <h2>COLORPALETTE</h2>
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                {click ? <CgClose /> : <CgMenuRight />}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/">
                    Home
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/services">
                    Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/products">
                    Products
                  </NavLinks>
                </NavItem>
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/sign-up">
                      <Button primary>SIGN UP</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/sign-up">
                      <Button  fontBig primary>SIGN UP</Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>  
        </>
    )
}

export default Navbar;
