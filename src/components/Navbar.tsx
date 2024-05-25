import styled from "styled-components";

const NavWapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  height: 70px;
  padding: 0px 48px;
`;
const Logo = styled.img`
  width: 82px;
  height: 40px;
  top: 16px;
  left: 48px;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Navbar = () => {
  return (
    <NavWapper>
      <Logo src="src\assets\nxt_logo.png" alt="logo" />
      <Icon src="src\assets\img.png" alt="icon" />
    </NavWapper>
  );
};

export default Navbar;
