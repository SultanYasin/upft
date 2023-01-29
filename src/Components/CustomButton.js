import React from "react";
import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: #3b3376;
  color: white;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  variant: contained;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;

export const SecondaryButton = styled.button`
  background-color: #fff;
  border-radius : 2px
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  variant: outlined;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
`;
