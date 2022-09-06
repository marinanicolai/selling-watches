import React from "react";
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <>
      <main>
        <h2>Welcome to the Men's watch page!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default Men;
