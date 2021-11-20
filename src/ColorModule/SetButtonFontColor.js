import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled, { css } from "styled-components";

const SetButtonFontColor = (props) => {
  const { description } = props;
  return (
    <Container>
      <LabelHeader>{description}</LabelHeader>
      <SecondHeader>Text on the primary color button</SecondHeader>
      <div>
        <RadioGroup name="use-radio-group" defaultValue="first">
          <FormControlLabel value="white" label="white" control={<Radio />} />
          <FormControlLabel value="black" label="black" control={<Radio />} />
        </RadioGroup>
      </div>
    </Container>
  );
};
export default SetButtonFontColor;

export const baseStyles = css`
  padding-top: 10px;
`;
// const TextStyle=
const LabelHeader = styled.div`
  ${baseStyles}
  font-size: 12px;
  line-height: 14px;
  color: #00000080;
`;

const SecondHeader = styled.div`
  ${baseStyles}
  font-size: 14px;
  line-height: 12px;
`;
const Container = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  color: #000000;
`;
