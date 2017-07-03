import React, { Component } from 'react';
import './App.css';

const colors_range = [
  '#ffa726',
  '#1e88e5',
  '#43a047',
  '#8e24aa',
  '#d32f2f',
];

// class Square extends Component {
//   constructor() {
//     super();
//     this.state = {color: ""}
//   }
//   componentDidMount() {
//     this.setState({color: this.props.value})
//   }
//   render () {
//     return (
//       <button className="square" style={{backgroundColor: this.state.color}} onClick={() => this.props.onClick()}>
//       </button>
//     );
//   }
// }

class Board extends Component {
  constructor() {
    super();
    this.state = {
      colors: Array.from({length: 16}, () => { return Math.floor(Math.random() * 5)}),
    };
  }
  randColor() {
    return (Math.floor(Math.random() * 5));
  }
  renderSquare(i) {
    return (
      <button className="square" style={{backgroundColor: colors_range[this.state.colors[i]]}} onClick={() => this.handleClick(i)}>
      </button>
    );
  }
  matchCheck() {
    var store = 0;
    store = this.state.colors[0];
    for (var i = 0; i < 16; i++) {
      if (this.state.colors[i] !== store)
      {
        return (false);
      }
    }
    return (true);
  }
  handleClick(i) {
    let colors = this.state.colors.slice();
    colors[i] = this.randColor();
    this.setState({colors: colors});
    if (this.matchCheck() !== false) {
      alert("You win!");
    };
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Color Match</h2>
        </div>
        <div className="Instructions">
          <h3>Click to Match the Colors!</h3>
        </div>
        <div className="Board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
