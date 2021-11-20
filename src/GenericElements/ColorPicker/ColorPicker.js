import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";

const ColorPicker = (props) => {
  // color=must be rgb(',',')
  const { color, maxNumberCondtion, handleChange } = props;

  const [background, serBackground] = useState(
    color && converRgbToArray(color)
  );
  useEffect(() => {
    serBackground(converRgbToArray(color));
  }, [color]);

  const handleChangeBackground = (color) => {
    const rgbColor = color.rgb;
    if (maxNumberCondtion) {
      if (disabledColorByNumber(maxNumberCondtion, rgbColor))
        setBackground(rgbColor);
    } else {
      setBackground(rgbColor);
    }
  };
  const setBackground = (color) => {
    serBackground(color);
    handleChange && handleChange(converRgbToString(color));
  };
  return <Picker color={background} onChange={handleChangeBackground} />;
};

export default ColorPicker;

// function convert color to format rgb
export const converRgbToArray = (color) => {
  const rgb = color.replace(/[^\d,]/g, "").split(",");
  const obj = {
    a: `${rgb[3] || 1}`,
    b: `${rgb[2]}`,
    g: `${rgb[1]}`,
    r: `${rgb[0]}`,
  };
  return obj;
};

export const converRgbToString = (color) => {
  return `rgba(${color.r},${color.g},${color.b},${(color.a && color.a) || 1})`;
};

const disabledColorByNumber = (number, rgbColor) => {
  if (rgbColor.r > number && rgbColor.g > number && rgbColor.b > number)
    return false;
  return true;
};
const Picker = styled(SketchPicker)`
  background: #0000ff00 !important;
  box-shadow: none !important;
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
`;
