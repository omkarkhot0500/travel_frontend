import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const nav_link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Headers = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderfun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        return headerRef.current.classList.add("sticky__header");
      } else {
        return headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderfun();
    return () => window.removeEventListener("scroll", stickyHeaderfun);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      className="w-full flex items-center justify-center flex-col h-[80px] bg-slate-100"
      ref={headerRef}
    >
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center rounded justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="load.." />
            </div>

            {/* Menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="nav__right d-flex align-items-center gap-4">
              {/* Mobile Menu Icon */}
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Headers;
