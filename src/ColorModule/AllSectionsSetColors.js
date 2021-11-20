import React, { useContext } from "react";
import { ColorModuleContext } from "./AppColorMoodel";
import InternalSection from "../GenericElements/InternalSection";
import styled from "styled-components";

const AllSectionsSetColors = () => {
  const {
    items,
    currentSubjectIndexSelected,
    setCurrentSubjectIndexSelected,
    handleChangeColor,
  } = useContext(ColorModuleContext);

  const handelClick = (index, color) => {
    setCurrentSubjectIndexSelected(index);
    handleChangeColor(color);
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <WrapSection selcted={currentSubjectIndexSelected === index&&item.children}>
            <InternalSection
              headerItems={[item.title, <BoxColor color={item.color} />]}
              selectedStatus={currentSubjectIndexSelected === index}
              onClick={() => handelClick(index, item.color)}
            >
              {item.children}
            </InternalSection>
          </WrapSection>
        );
      })}
    </div>
  );
};
export default AllSectionsSetColors;

const WrapSection = styled.div`
  height: ${(props) => (props.selcted ? "200px" : "35px")};
  max-height:500px;
  width: 230px;
  margin: 0px 0px 15px;
  transition: 0.3s;
`;


const BoxColor = styled.span`
  height: 18px;
  width: 18px;
  background: ${(props) => props.color};
  border-radius: 2px;
`;
