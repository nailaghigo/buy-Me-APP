import 'materialize-css'
import {Navbar, NavItem} from 'react-materialize';

function NavBar() {
  return (
    <Navbar
      alignLinks="right"
      brand={<a className="asd" href="#">BuyME</a>}
      id="mobile-nav"
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="">
        Products
      </NavItem>
      <NavItem href="">
        Contact Us
      </NavItem>
      <NavItem href="">
        Cart
      </NavItem>
      <NavItem href="">
        Log In
      </NavItem>
    </Navbar>
  )
}

export default NavBar;