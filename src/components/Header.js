import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, Title, Info, InfoText, Navigation } from './StyledHeader';

const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <StyledHeader bgColor="#f1f1f1">
      <Link to="/">
        <Title color="#333">My App</Title>
      </Link>
      <Navigation>
        <NavLink to="/history" activeClassName="active">History</NavLink>
        <NavLink to="/animated-list" activeClassName="active">Admin</NavLink>
      </Navigation>
      <Info>
        {itemCount !== undefined && displayedItemCount !== undefined && (
          <>
            <InfoText color="#333">Items in cart: {itemCount}</InfoText>
            <InfoText color="#333">Displayed items: {displayedItemCount}</InfoText>
          </>
        )}
      </Info>
    </StyledHeader>
  );
};

export default Header;