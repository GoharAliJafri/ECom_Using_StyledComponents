import React from 'react';
import Nav from "./Nav";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" className='logo'/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 15rem;
  }
`;
export default Header