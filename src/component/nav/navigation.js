import React from "react";
import { Badge } from "reactstrap";
import styled from "styled-components";

const NavBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  position:fixed;
  width:100%;
  background-color:White;
  top:0;
  z-index:1;
`;

const Logo = styled.h2`
  font-family: "Monoton", cursive;
`;

const Navigation = () => {
  return (
    <NavBox id="nav-bar">
      <Logo>Day by day</Logo>
      <div>
        <Badge href="#nav-bar" color="light">
          home
        </Badge>
        <Badge href="#" color="light">
          about
        </Badge>
        <Badge href="#" color="light">
          contact
        </Badge>
      </div>
    </NavBox>
  );
};

export default Navigation;
