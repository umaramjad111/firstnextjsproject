import styled from "styled-components";
import Link from "next/link";
const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  cursor: pointer;
`;
export default function Navbar() {
  return (
    <Nav>
      <div>
        <Link href="/">
          <StyledLink>NXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contactus">
          <StyledLink>Contact Us</StyledLink>
        </Link>
      </div>
    </Nav>
  );
}
