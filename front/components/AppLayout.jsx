import React from "react";
import styled from "styled-components";

const TopBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: skyblue;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`;

const AddButton = styled.button`
  outline: none;
  border: none;
  background: none;

  width: 65px;
  height: 26px;

  background-color: steelblue;
  color: #fff;
  border-radius: 10px;

  cursor: pointer;
`;

const LogoText = styled.div`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  text-shadow: 3px 3px 2px #555;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <TopBox>
        <LogoText>AWS MEMO</LogoText>
        <AddButton> + 추가 </AddButton>
      </TopBox>

      <div>{children}</div>
    </>
  );
};

export default AppLayout;
