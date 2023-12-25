import styled from "styled-components";

export const SheetInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  display: grid;
  /* height: 200px; */
  grid-template-columns: repeat(4, 1fr); 
  gap: 8px;
`;
export const IntervalInsert = styled.div`
  /* margin-top: auto; */
  /* margin-bottom: -67px; */
  display: grid;
  max-height: min-content;
  grid-template-columns: repeat(5, 1fr); 
  gap: 8px;
  margin-bottom: 0;
  margin-top: 0;
  margin-bottom: 8px;


 
`;

export const Button = styled.button`
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  background-color: #282828;
  border-radius: 8px;

  width: 64px;

  height: 64px;
  font-weight: 500;
  font-size: 22px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const ButtonSmall = styled.button`
  padding: 24px;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;

  background-color: #282828;
  border-radius: 8px;

  width: 32px;

  height: 32px;
  font-weight: 300;
  font-size: 16px;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Container = styled.div`

max-width: 100%;

/* overflow-y: hidden; */
`