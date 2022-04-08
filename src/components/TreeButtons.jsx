import React from "react";
import styled from "styled-components";
import { BasicButton } from "./Common/StyledButtons";
const ItemButtonWrapper = styled.div``;

export default function TreeButtons({ shouldShow }) {
  function hideFunc() {
    shouldShow();
  }
  function deleteFunc() {}

  return (
    <ItemButtonWrapper>
      <BasicButton onClick={deleteFunc}>Delete</BasicButton>
      <BasicButton onClick={hideFunc}>Hide</BasicButton>
    </ItemButtonWrapper>
  );
}
