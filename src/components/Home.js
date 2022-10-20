import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="home-container">
      <div className="nav-container">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "steelblue" } : { color: "grey" }
          }
          className="link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className="link" to="/users">
          Users
        </NavLink>
      </div>
      <h1>RANDOM USER GENERATOR</h1>
      <p>Click on the get user button on the Users Page to see magic.</p>
    </section>
  );
}

export default Home;
