import React from "react";

export default class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  subtração = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  multiplicação = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  subtração = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  adição = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  limpar = () => {
    this.setState({ n1: "", n2: "", result: "" });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Calculadora</h1>

          <input
            value={this.state.n1}
            type="number"
            onChange={this.handleChange1}
          />

          <input
            value={this.state.n2}
            type="number"
            onChange={this.handleChange2}
          />

          <button onClick={this.divisao}>/</button>
          <button onClick={this.multiplicação}>*</button>
          <button onClick={this.subtração}>-</button>
          <button onClick={this.adição}>+</button>
          <button onClick={this.limpar}>AC</button>
          <h1>{this.state.result}</h1>
        </div>
      </>
    );
  }
}
