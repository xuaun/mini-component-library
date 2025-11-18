import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({
  label = "Search",
  icon = "search",
  width = 250,
  size = "small",
  placeholder = "Search...",
}) => {
  return (
    <Wrapper size={size === "small" ? 24 : 36} width={width}>
      <Icon
        id={icon}
        strokeWidth={2}
        size={size === "small" ? 16 : 24}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput
        id={label}
        type="text"
        placeholder={placeholder}
        width={width}
        size={size}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: flex;
  width: ${(p) => p.width + "px"};
  color: ${COLORS.gray700};
  height: ${(p) => p.size / 16 + "rem"};

  & div:first-child {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: ${(p) => (p.size === "small" ? 24 / 16 + "rem" : 36 / 16 + "rem")};
  font-size: ${(p) =>
    p.size === "small" ? 14 / 16 + "rem" : 18 / 16 + "rem"};
  font-weight: 700;
  padding-left: ${(p) =>
    p.size === "small" ? 24 / 16 + "rem" : 36 / 16 + "rem"};
  border: none;
  border-bottom: ${(p) => (p.size === "small" ? 1 : 2) + "px"} solid
    ${COLORS.black};
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
    font-size: ${(p) =>
      p.size === "small" ? 14 / 16 + "rem" : 18 / 16 + "rem"};
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export default IconInput;
