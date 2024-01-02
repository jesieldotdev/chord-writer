import styled from "styled-components";

export const Block = styled.button`
  background-color: #282828;
  border-radius: 8px;

  width: 78px;

  height: 78px;
  font-weight: 500;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const BlockIntervals = styled.button`
  background-color: #282828;
  border-radius: 8px;

  width: 54px;

  height: 54px;
  font-weight: 500;
  font-size: 22px;
  margin-top: 16px;
`;

export const BlockSheet = styled.div`
  background-color: #363636;
  border-radius: 8px;

  width: 32px;

  height: 32px;
  font-weight: 700;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 4px;
  .sheetBlock {
    /* background-color: red; */
  }
`;

export const BottomInsert = styled.div`
  margin-top: auto;
  margin-bottom: -67px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;
export const SheetWrapper = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2px;
`;
export const Int = styled.div`
  // margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
`;
