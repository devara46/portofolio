import { NavLink } from "react-router-dom";
import { RESEARCH_THEMES, SITE_NAME } from "../content/nav";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return isActive ? "navlink is-active" : "navlink";
}

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          {SITE_NAME}
        </NavLink>
        <nav className="navbar__nav">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/research-vision" className={navLinkClass}>
            Research Vision
          </NavLink>
          <div className="navdropdown">
            <NavLink to="/research/current-research" className={navLinkClass}>
              Research
            </NavLink>
            <div className="navdropdown__panel">
              {RESEARCH_THEMES.map((item) => (
                <NavLink key={item.path} to={item.path} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/publications" className={navLinkClass}>
            Publications
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
