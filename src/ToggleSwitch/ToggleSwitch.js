import React,{useState} from "react";
import styled from "styled-components";
import Bg from './louckSwichIcon.svg'
const ToggleSwitch = (props) => {
  const { checked, handleChange } = props;
  const [cheakedSwich, setCheakedSwich] = useState(checked)
  
  const changeChecked = (cheaked) => {
    setCheakedSwich(cheaked)
    handleChange && handleChange(cheaked);
  }
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={cheakedSwich || false}
        onChange={(e)=>changeChecked(e.target.checked)}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default ToggleSwitch;

const CheckBoxWrapper = styled.div`
  position: relative;
  top:20px;
  left: 20px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width 23.8px;
  height: 9.8px;
  border-radius: 15px;
  background: #9B9B9B;
  cursor: pointer;
  background: rgb(155 155 155 / 48%);
  &::after {
    content:"";
    background-image: url(${Bg}) !important;
    background-size: 100% 100% !important;
    display: block;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 3px;
    background: #9C9C9C;
    transition: 0.2s;
    margin-left: -4px;
    margin-top: -3px;
    opacity:1;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4273ff7a;
    &::after {
        content:url(./Mask.png);
        display: block;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin-left: 13px;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        margin-top: -3px;
        background: #4273ff;
    }
  }
`;
