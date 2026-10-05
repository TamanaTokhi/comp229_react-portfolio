import { Link, Outlet } from "react-router-dom";

function Format() {
  return (
    <>
      <header>
        <div className="logo">TT</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/references">References</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Tamana Tokhi. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Format;