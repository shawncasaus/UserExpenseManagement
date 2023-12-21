import { Link } from "react-router-dom";
import { Nav, UL, LI } from "../../styles";

const Navbar = () => {
  return (
    <Nav>
      <UL>
        <Link to="/">
          <LI>Home</LI>
        </Link>
        <Link to="/expense-management">
          <LI>Expenses</LI>
        </Link>
        <Link to="/total-cost">
          <LI>Costs</LI>
        </Link>
      </UL>
    </Nav>
  );
};

export default Navbar;
