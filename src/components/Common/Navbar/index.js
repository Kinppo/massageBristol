import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

import "./navbar.css"

const navLinks = [
  {
    title: "Swedish Massage",
    url: "/swedish-massage",
  },
  {
    title: "Deep Tissue Massage",
    url: "/deep-tissue-massage",
  },
  {
    title: "Sports Massage",
    url: "/sports-massage",
  },
  {
    title: "Thai Massage",
    url: "/thai-massage",
  },
  {
    title: "Hot Stone Massage",
    url: "/hot-stone-massage",
  },
  {
    title: "Couples Massage",
    url: "/couples-massage",
  },
]

const NavigationBar = props => {
  return (
    <section>
      <Navbar expand="lg" className="container">
        <Navbar.Brand href="/">MassagesBristol</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-item" href="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="nav-item"
              title="Bristol Massages"
              id="basic-nav-dropdown"
            >
              {navLinks.map(navlink => (
                <NavDropdown.Item>
                  <Link to={navlink.url}>{navlink.title}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}

NavigationBar.propTypes = {}

export default NavigationBar
