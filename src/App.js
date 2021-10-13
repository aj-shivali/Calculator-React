import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      isActive: true,
    };
  }
  click = (e) => {
    let inputString = this.state.result + e.currentTarget.name;
    this.setState({ result: inputString });
  };
  getPercent = () => {
    let inputString = eval(this.state.result / 100).toString();
    this.setState({ result: inputString });
  };
  getResult = () => {
    try {
      let inputString = eval(this.state.result).toString();
      this.setState({ result: inputString });
    } catch (err) {
      this.setState({ result: "error" });
    }
  };
  clearInput = () => {
    this.setState({ result: "" });
  };

  backspace = () => {
    let inputString = this.state.result.slice(0, this.state.result.length - 1);
    this.setState({ result: inputString });
  };

  changeThemeColor = () => {
    let bool = !this.state.isActive;
    this.setState({ isActive: bool });
  };

  render() {
    return (
      <div>
        <div className="toggleTheme">
          <button onClick={this.changeThemeColor}>Change Theme</button>
        </div>
        <div
          className={this.state.isActive ? "container-dark" : "container-light"}
        >
          <form>
            <input
              type="text"
              className={this.state.isActive ? "input-dark" : "input-light"}
              value={this.state.result}
            />
          </form>

          <div className="keypad">
            <button
              onClick={this.clearInput}
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              id="clear"
            >
              Clear
            </button>
            <button
              onClick={this.backspace}
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              id="backspace"
            >
              ⌫
            </button>
            <button
              onClick={this.getPercent}
              name="%"
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
            >
              &#37;
            </button>
            <button
              name="/"
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              onClick={this.click}
            >
              &divide;
            </button>
            <button
              name="7"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              7
            </button>
            <button
              name="8"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              8
            </button>
            <button
              name="9"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              9
            </button>
            <button
              name="*"
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              onClick={this.click}
            >
              &times;
            </button>
            <button
              name="4"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              4
            </button>
            <button
              name="5"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              5
            </button>
            <button
              name="6"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              6
            </button>
            <button
              name="-"
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              onClick={this.click}
            >
              &ndash;
            </button>
            <button
              name="1"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              1
            </button>
            <button
              name="2"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              2
            </button>
            <button
              name="3"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              3
            </button>
            <button
              name="+"
              className={
                this.state.isActive
                  ? "highlighted-dark darkTheme-btn"
                  : "highlighted-light lightTheme-btn"
              }
              onClick={this.click}
            >
              +
            </button>
            <button
              name="."
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              .
            </button>
            <button
              name="0"
              className={
                this.state.isActive ? "darkTheme-btn" : "lightTheme-btn"
              }
              onClick={this.click}
            >
              0
            </button>
            <button
              onClick={this.getResult}
              className="major darkTheme-btn"
              id="result"
            >
              =
            </button>
          </div>
        </div>
        <footer className="footer">
          <span>
            Created By : <a href="">Shiwali</a>
          </span>
        </footer>
      </div>
    );
  }
}
