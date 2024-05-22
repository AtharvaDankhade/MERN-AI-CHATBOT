import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          padding: "20vh",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built By
          <span>
            <Link style={{ color: "whitesmoke" }} className="nav-link" to={" "}>
              Atharva Dankhade
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
