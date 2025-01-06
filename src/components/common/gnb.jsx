import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;
const Li = styled.li`
  font-size: 1.2rem;
  color: #fff;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: #ff6347;
  }
`;

export default function GNB() {

  const navLi = [
    { label : "Home" , path : "/"},
    { label : "About" , path : "/about"},
    { label : "Product" , path : "/products"},
    { label : "Contact" , path : "/contact"},
  ];

  return (
    <Nav>
      <Ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}

        {/* 반복되는 li 태그를 map 함수로 수정 */}
        {navLi.map((link)=>(
          <Li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </Li>
        ))}

      </Ul>
    </Nav>
  );
}

