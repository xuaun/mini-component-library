/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const validSizes = ["small", "medium", "large"];
  if (!validSizes.includes(size)) {
    console.warn(
      `Invalid size prop: ${size}. Expected one of ${validSizes.join(
        ", "
      )}.`
    );
    return null;
  }

  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <StyledProgressBar
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
    >
      <ProgressIndicator value={clampedValue} />
      <VisuallyHidden>{clampedValue}%</VisuallyHidden>
    </StyledProgressBar>
  );
};

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
};

const StyledProgressBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: ${({ size }) => SIZES[size].height}px;
  padding: ${({ size }) => SIZES[size].padding}px;
  border-radius: ${({ size }) => SIZES[size].radius}px;
`;

const ProgressIndicator = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: ${({ value }) => value}%;
    background-color: ${COLORS.primary};
    transition: width 0.2s ease-in-out;
  }
`;

export default ProgressBar;
