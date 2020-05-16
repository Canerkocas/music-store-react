import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function () {
  return (
    <StyledNav className="navbar navbar-light navbar-expand-sm bg-danger px-sm-5">
      <Link to="/">
        <i className="fas fa-compact-disc navbar-brand"> </i>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Müzik Aletleri
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/records" className="nav-link">
            Plaklar
          </Link>
        </li>

        <li className="nav-item ml-5">
          <Link to="/accessories" className="nav-link">
            Aksesuarlar
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button>
          <span>
            <i className="fas fa-shopping-cart mr-1" />
          </span>
          Sepetim
        </Button>
      </Link>
    </StyledNav>
  );
}

const Button = styled.button`
  font-size: 1.3rem;
  text-transform: capitalize;
  background: transparent;
  border: 2px solid #666666;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--mainDark);
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.4rem;
  transition: all 0.2s;

  &:hover {
    background-color: #b3b3b3;
  }

  &:focus {
    outline: none;
  }
`;

const StyledNav = styled.nav`
  background-color: var(--mainRed);

  .fa-compact-disc {
    font-size: 1.8rem;
  }
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    transition: all 0.2s;

    &:hover {
      color: #f2f2f2 !important;
    }
  }
`;
