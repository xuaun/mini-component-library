import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect id="filter-by" value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      {displayedValue}
      <Icon id="chevron-down" strokeWidth={2} size={18} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 13px;
  width: max-content;
  color: ${COLORS.gray700};
  display: flex;
  gap: 21px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  appearance: none;
`;

export default Select;
