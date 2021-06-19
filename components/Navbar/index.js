const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink href="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>

                    <NavLink href="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink href="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink href="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink href="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>

        </>
    )
}

export default Navbar
