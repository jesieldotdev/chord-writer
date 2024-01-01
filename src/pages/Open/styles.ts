import styled from "styled-components";

export const Container = styled.div``;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-color: ${(props) => props.theme.keyboardBackGround};
  padding: 8px;
  gap: 4px;
  margin-bottom: 8px;
  border-radius: 8px;

  .title {
    font-weight: 600;
  }
  .subtitle {
    font-weight: 300;
    font-size: 12px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`;

export const IconLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
