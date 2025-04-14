import React from 'react';
import styled from 'styled-components';

const ProfileButton = ({ onClick }) => {
  return (
    <StyledWrapper>
      <button className="Btn" onClick={onClick}>
        PROFILE
        <svg className="svgIcon" viewBox="0 0 576 512">
        <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm89.6 32h-11.8a174.4 174.4 0 0 1-155.6 0h-11.8A134.4 134.4 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.4 134.4 0 0 0 313.6 288z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
  }

  .svgIcon {
    width: 16px;
  }

  .svgIcon path {
    fill: white;
  }

  .Btn::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: 0.3s;
    mix-blend-mode: difference;
  }

  .Btn:hover::before {
    transition-duration: 0.3s;
    transform: translate(100%, -50%);
    border-radius: 0;
  }

  .Btn:active {
    transform: translate(5px, 5px);
    transition-duration: 0.3s;
  }
`;

export default ProfileButton;