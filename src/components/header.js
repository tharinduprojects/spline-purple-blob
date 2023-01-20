import styled from "styled-components";
import logo from '../assets/images/logo.png'; 
import Spline from '@splinetool/react-spline';

const Header = () => {
  return ( 
    <HeaderNav>
      <div className="site-logo">
        {/* <img src={logo} alt="" /> */}
        <Spline scene="https://prod.spline.design/2m7KvxxlhZtGYHmP/scene.splinecode" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </HeaderNav>
   );
}
 
export default Header;

const HeaderNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  .nav-bar{
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-top: 50px;
      padding-left: 15px;
      li{
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 4px;
      /* font-family: 'Anton', sans-serif !important; */
    }
    }

  }
`