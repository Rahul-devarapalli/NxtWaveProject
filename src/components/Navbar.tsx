import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border-radius: 50px;
`;
const Button = styled.button`
  background: #2dca73;
  width: Hug (107px) px;
  height: Hug (40px) px;
  top: 16px;
  left: 1221px;
  padding: 8px 20px 8px 20px;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  margin-left:1173px;
`;

type Props = {
  isResourcesPage?: boolean;
};

const Navbar = ({ isResourcesPage = false }: Props) => {
  return (
    <NavWapper>
      <Logo src="src\assets\NxtWave.svg" alt="logo" />
      {isResourcesPage && (
        <Link to="add-resource">
          <Button>ADD ITEM</Button>
        </Link>
      )}
      <Icon src="src\assets\image.svg" alt="icon" />
    </NavWapper>
  );
};

export default Navbar;
