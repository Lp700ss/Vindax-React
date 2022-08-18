import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/one">One</Link>
        </li>
        <li>
          <Link to="/labs">Labs</Link>
        </li>
        <li>
          <Link to="/savings">Savings</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/advanceexchange">AdvanceExchange</Link>
        </li>
        <li>
          <Link to="/basicexchange">BasicExchange</Link>
        </li>
        <li>
          <Link to="/deposit">Deposit</Link>
        </li>
        <li>
          <Link to="/labsone">LabsOne</Link>
        </li>
        <li>
          <Link to="/launchpad">Launchpad</Link>
        </li>
        <li>
          <Link to="/withdraw">Withdraw</Link>
        </li>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
