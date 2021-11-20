import React from "react";
import SetButtonFontColor from "./SetButtonFontColor";
import styled from "styled-components";

const HeaderPrimarytitle = styled.label`
display:flex;
align-items: center;
`
export const itemsColor = [
  {
    title: (
      <HeaderPrimarytitle>
        Primary Color&nbsp;
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.00016 0.833496C2.70016 0.833496 0.833496 2.70016 0.833496 5.00016C0.833496 7.30016 2.70016 9.16683 5.00016 9.16683C7.30016 9.16683 9.16683 7.30016 9.16683 5.00016C9.16683 2.70016 7.30016 0.833496 5.00016 0.833496ZM4.5835 2.91683V3.75016H5.41683V2.91683H4.5835ZM4.5835 4.5835V7.0835H5.41683V4.5835H4.5835ZM1.66683 5.00016C1.66683 6.83766 3.16266 8.3335 5.00016 8.3335C6.83766 8.3335 8.3335 6.83766 8.3335 5.00016C8.3335 3.16266 6.83766 1.66683 5.00016 1.66683C3.16266 1.66683 1.66683 3.16266 1.66683 5.00016Z"
            fill="black"
          />
        </svg>
      </HeaderPrimarytitle>
    ),
    color: "rgba(246, 80, 102, 1)",
    maxNumberCondtion: 200,
    children: (
      <SetButtonFontColor description="Buttons on the registration/login process, prices after discount, cart." />
    ),
  },
  {
    title: "Secondary Color",
    color: "rgba(101, 92, 169, 1)",
    children: (
      <SetButtonFontColor description="Add to cart button, general button of confirmation." />
    ),
  },
  {
    title: "Thirdly Color",
    color: "rgba(246, 187, 49, 1)",
    children: (
      <SetButtonFontColor description="Go to checkout button, other elements." />
    ),
  },
  {
    title: "Header Color",
    color: "rgba(42, 52, 64, 1)",
    children: <SetButtonFontColor />,
  },
  {
    title: "Toolbar Color",
    color: "rgba(236, 236, 236, 1)",
    children: <SetButtonFontColor />,
  },
  {
    title: "Main Text Color",
    color: "rgba(42, 52, 64, 1)",
  },
];

