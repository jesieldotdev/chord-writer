import styled from "styled-components";

export const SheetInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  display: grid;
  /* height: 200px; */
  grid-template-columns: ${(props) => props.gridColls || 'repeat(4, 1fr)'}; 
  gap: 8px;
  margin-bottom: auto;
`;
export const IntervalInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  display: grid;
  min-height: 200px;
  grid-template-columns: ${(props) => props.gridColls || 'repeat(4, 1fr)'}; 
  gap: 8px;
  margin-top: 56px;
`;

export const Button = styled.button`
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

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
export const ButtonSmall = styled.button`
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  background-color: #282828;
  border-radius: 8px;

  width: 44px;

  height: 44px;
  font-weight: 500;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
`;
