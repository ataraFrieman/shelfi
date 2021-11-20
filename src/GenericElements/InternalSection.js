import React from "react";
import styled from "styled-components";

const InternalSection = (props) => {
  const { headerItems, defualtStatus, children, selectedStatus, onClick } =
    props;
  debugger;
  return (
    <Container selcted={selectedStatus} onClick={onClick}>
      {headerItems && (
        <Header selcted={selectedStatus} childrenjj={children}>
          {headerItems.map((item) => {
            return item;
          })}
        </Header>
      )}
      {((children && selectedStatus) ||
        defualtStatus === 1) && <div>{children}</div>}
    </Container>
  );
};

export default InternalSection;

const Container = styled.div`
  height: 100%;
  width: 100%;
  border: 0.5px solid #00000080;
  padding: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  background: ${(props) => props.selcted && "rgba(51, 102, 255, 0.15)"};
  border: 0.5px solid
    ${(props) => (props.selcted && "#3366ff") || "gba(0, 0, 0, 0.5)"};
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props) => (props.selcted && props.childrenjj) && "0.5px solid #3366FF"};
  padding-bottom: 10px;
  font-size: 15px;
  line-height: 12px;
  color: ${(props) => (props.selcted ? "#3366FF" : "#000000")};
`;
