import React, { useState, useRef } from "react";
import { v4 as randomNumber } from "uuid";

const Lists = () => {
  const navLinks = [
    {
      linkname: "Home",
      href: "https://google.com",
    },
    {
      linkname: "Services",
      href: "#services",
    },
    {
      linkname: "Contact",
      href: "#contact",
    },
    {
      linkname: "About",
      href: "#about",
    },
    {
      linkname: "login",
      href: "https://google.com",
    },
  ];
  const ourForm = useRef(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
          padding: "40px",
        }}
      >
        {navLinks.map((link, index) => {
          return (
            <a key={randomNumber()} href={link.href}>
              {" "}
              {link.linkname}
            </a>
          );
        })}
      </nav>

      <div id="about" style={sections}>
        <h2>Forms</h2>
        <form action="#" ref={ourForm} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">name: </label>
          <input
            type="text"
            id="name"
            placeholder="input name"
            onChange={(e) => handleName(e)}
          />{" "}
          <br />
          {/* -------------------------------------------------- */}
          <label htmlFor="email">email: </label>
          <input type="text" id="email" placeholder="email" /> <br />
          {/* -------------------------------------------------- */}
          <label htmlFor="number">number: </label>
          <input type="number" id="number" placeholder="phone number" /> <br />
          {/* -------------------------------------------------- */}
          <button
            type="submit"
            onClick={() => (ourForm.current.style.backgroundColor = "red")}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

const sections = {
  height: "100vh",
  display: "grid",
  placeItems: "center",
};

export default Lists;
