import { Component } from "react";

class ClassComponent extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <>
        <div>
          <div>Class Component</div>
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Increase</button>
          </div>
        </div>
      </>
    );
  }
}

export default ClassComponent;