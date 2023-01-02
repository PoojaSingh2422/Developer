import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 0.9rem;
    background: #85e45d;
    border-radius: 3px;
    padding: 5px;
    height: 12rem;
    position: fixed;
    bottom: 12rem;
    right: 0.2rem;
    width: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease 0s;
    color: white;
    opacity: 0.9;
    color: black;

    & {
      animation: gototop 1.2s linear infinite alternate-reverse;
      font-weight: 600;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.2rem);
      }
      100% {
        transform: translateY(0.3rem);
      }
    }
  }
`;

const Support = () => (
  <>
    <NavLink to="/dashboard/blogs/sourcecode">
      <Wrapper>
        <div className="top-btn">
          <div className="buttom-btn">
            <span>H</span>
            <br />
            <span>E</span>
            <br />
            <span>L</span>
            <br />
            <span>P</span>
            <br />
            <br />
            <span>M</span>
            <br />
            <span>E</span>
          </div>
        </div>
      </Wrapper>
    </NavLink>
  </>
);

export default Support;
