import { useEffect, useState } from "react";
import { IconClose, IconMenu } from "./icons";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      {/* Desktop Menu  */}
      {isNavOpen || windowWidth > 768 ? (
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre mí</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      ) : (
        ""
      )}

      {!isNavOpen ? (
        <button
          key="open-menu"
          className="nav-open"
          aria-label="Open Menu"
          onClick={toggleNav}
        >
          <IconMenu />
        </button>
      ) : (
        ""
      )}

      {/* Close Button  */}
      {isNavOpen ? (
        <button
          key="close-menu"
          className="nav-close"
          aria-label="Close Menu"
          onClick={toggleNav}
        >
          <IconClose />
        </button>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navigation;
