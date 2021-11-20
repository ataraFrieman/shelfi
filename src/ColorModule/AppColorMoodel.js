import React, { useState } from "react";
import { itemsColor } from "./DataColorSection";
import ColorPicker from "../GenericElements/ColorPicker/ColorPicker";
import AllSectionsSetColors from "./AllSectionsSetColors";

import styled from "styled-components";

const AppColorMoodelWrap = () => {
  const [currentIndexSelected, setCurrentIndexSelected] = useState(0);
  const [items, setItems] = useState(itemsColor);
  const [currentColor, setCurrentColor] = useState(
    items[currentIndexSelected].color
  );

  const setItemColorByIndex = (newColor) => {
    const temp = [...items];
    temp[currentIndexSelected].color = newColor;
    setItems(temp);
  };

  const commonStates = {
    items: items,
    setItemColorByIndex: setItemColorByIndex,
    currentSubjectIndexSelected: currentIndexSelected,
    setCurrentSubjectIndexSelected: setCurrentIndexSelected,
    handleChangeColor: setCurrentColor,
  };
  return (
    <div>
      <ColorModuleContext.Provider value={commonStates}>
        <AppSectionWrap>
          <AllSectionsSetColors />
          <PickerWrap>
            <ColorPicker
              color={currentColor}
              handleChange={setItemColorByIndex}
              maxNumberCondtion={items[currentIndexSelected].maxNumberCondtion}
            />
          </PickerWrap>
        </AppSectionWrap>
      </ColorModuleContext.Provider>
    </div>
  );
};

export default AppColorMoodelWrap;
export const ColorModuleContext = React.createContext();

const AppSectionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100% !important;
  height: 100% !important;
`;
const PickerWrap = styled.div`
  width: 280px;
`;
