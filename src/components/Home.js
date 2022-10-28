import React from "react";
import Nav from "./NavLink";

function Home() {
  return (
    <section className="home-container">
      <Nav />
      <h1>RANDOM USER GENERATOR</h1>
      <p>Click on the get user button on the Users Page to generate 5 users.</p>
    </section>
  );
}

export default Home;
