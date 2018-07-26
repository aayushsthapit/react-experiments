import React, { Component } from "react";
import Square from "./Square.js";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    this.loadSquareTiles = this.loadSquareTiles.bind(this);
    this.setValues = this.setValues.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
  }

  setValues(i) {
    if (!this.calculateWinner(this.state.squares) && !this.state.squares[i]) {
      let newsquares = this.state.squares.slice();
      newsquares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({ squares: newsquares, xIsNext: !this.state.xIsNext });
    }
  }

  loadSquareTiles(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onclicked={() => {
          this.setValues(i);
        }}
      />
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    return (
      <div>
        Next Move:{this.state.xIsNext ? "X" : "O"}
        Winner:{winner}
        <div className="board-row">
          {this.loadSquareTiles(0)}
          {this.loadSquareTiles(1)}
          {this.loadSquareTiles(2)}
        </div>
        <div className="board-row">
          {this.loadSquareTiles(3)}
          {this.loadSquareTiles(4)}
          {this.loadSquareTiles(5)}
        </div>
        <div className="board-row">
          {this.loadSquareTiles(6)}
          {this.loadSquareTiles(7)}
          {this.loadSquareTiles(8)}
        </div>
      </div>
    );
  }
}

export default Board;
