import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        Copyright &copy; {new Date().getFullYear() + 1} 911Backdate.com by Abreu
        Motors
      </footer>
    );
  }
}
