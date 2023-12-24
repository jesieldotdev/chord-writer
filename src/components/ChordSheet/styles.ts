import styled from "styled-components";

export const SheetWrapper = styled.div`
  margin-bottom: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  text-align: center;
  max-height: max-content;
`;

export const Label = styled.label`
  text-align: center;
  /* width: 120px; */
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const BlockSheet = styled.div`
  background-color: #363636;
  border-radius: 8px;

  width: max-content;
  padding: 2px 12px;

  height: max-content;
  font-weight: 700;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 32px;

  margin-top: 8px;
  /* margin-bottom: 100px; */

  label{
    font-size: 16px;
    font-weight: 300;
  }
`;
