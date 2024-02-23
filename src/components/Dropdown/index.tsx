import React from "react";
import * as S from "./styles";
import { RiMenu3Line } from "react-icons/ri";
import {
  AiOutlineSetting,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineProfile,
  AiOutlineDelete,
} from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { Context } from "../../global/Context";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

interface DropDownProps {
  style?: React.CSSProperties;
}

export const DropDownMenu = ({ style }: DropDownProps) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);
  const { theme, isDark } = React.useContext(Context);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log("Clique fora do botão");
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.MenuContainer style={style} theme={theme}>
      <button onClick={() => onClick()} className="menu-trigger">
        <RiMenu3Line size={20} color={theme.text} />
        {/* <span>John Doe</span> */}
        {/* <img src="https://avatars.githubusercontent.com/u/82860253?v=4" alt="User avatar" /> */}
      </button>

      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <div>
          {/* <li><CiFileOn size={24} /><Link to="/" >Nova cifra</Link></li> */}
          <li>
            <AiOutlineSetting size={24} />
            <a href="/messages" />
            Preferências
          </li>
          {/* <li>
            <a>
              <ThemeToggle showText />{" "}
            </a>
          </li> */}
          <li>

            <Link to="/login">
              <AiOutlineProfile size={24} />
              Conta
            </Link>
          </li>
        </div>
      </nav>
    </S.MenuContainer>
  );
};

export default DropDownMenu;
