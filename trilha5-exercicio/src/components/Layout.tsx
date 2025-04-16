import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/rooms">Quartos</Link>
      </nav>
      <main style={{ marginTop: "80px", textAlign: "center" }}>{children}</main>
    </>
  );
};

export default Layout;
