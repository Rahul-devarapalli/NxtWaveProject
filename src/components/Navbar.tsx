import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  height: 4.375rem; 
  padding: 0 1.5rem; 
`;

const Logo = styled.img`
  width: 5.125rem; 
  height: 2.5rem; 
`;

const Icon = styled.img`
  width: 2.5rem; 
  height: 2.5rem; 
  border-radius: 50%;
`;


const Button = styled.button`
  background: #2dca73;
  width: 6.688rem; 
  height: 2.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem; 
  color: #ffffff;
  border: none;

  margin-left: 73.313rem;

  @media (max-width: 768px) {
    width: 33%;
    margin-left: 8rem;
    height: 1.5rem;
    padding: 0.5rem 1.25rem; 
  
  }

  @media (min-width: 1024px) {
    width: auto; 
    margin-left: 73.313rem;
  }
`;



const Navbar = ({ isResourcesPage = false }: { isResourcesPage?: boolean }) => {
  return (
    <NavWrapper>
      <Logo src="/src/assets/NxtWave.svg" alt="logo" />
      {isResourcesPage && (
        <Link to="add-resource">
          <Button>ADD ITEM</Button>
        </Link>
      )}
      <Icon src="/src/assets/image.svg" alt="icon" />
    </NavWrapper>
  );
};

export default Navbar;
