import styled from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
  z-index: 999;

  a{
       text-decoration: none;
    user-select: none;
    color: ${(props) => props.theme.text};

    &:focus, :hover{
      background-color: none;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }

  .menu {
    background: ${(props) => props.theme.body};
    border-radius: 8px;
    position: absolute;
    top: 32px;
    right: 8px;
    width: max-content;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    text-decoration: none;
    font-size: 18px;
    padding: 4px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu div {
    /* list-style: none;
    padding: 0;
    margin: 0; */
    padding: 8px;
    display: flex;
    flex-direction: column;
    /* margin-left: 16px; */
    list-style: none;
  }

  .menu li {
    /* border-bottom: 1px solid #dddddd;
    padding-left: 16px;
        padding: 16px -8px; */

    /* background-color: red; */
    text-decoration: none;
    /* margin-bottom: 8px; */
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    gap: 5px;

    &:hover {
      background-color: ${(props) => props.theme.backgroundFocus};
    }
  }

  .menu li a {
    text-decoration: none;
    user-select: none;
    color: ${(props) => props.theme.text}
    /*   color: #333333;
    padding: 15px 20px;

    display: block; */
    margin: 0;
  }

  .menu-trigger {
    background: ${(props) => props.theme.body};
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 16px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;
    color: #787878;
    border-radius: 8px;
    margin-top: 4px;
    margin-right: 8px;
  }

  .menu-trigger:hover,
  .menu-trigger:focus {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    border-width: 0px;
    outline: 0px;
  }

  .menu-trigger span {
    font-weight: 700;
    vertical-align: middle;
    font-size: 14px;
    margin: 0 10px;
  }

  .menu-trigger img {
    border-radius: 90px;
  }
`;
