// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import React from "react"
import ReactDOM from "react-dom"

class Square extends React.Component {
    render() {
        return (
            <button className = "square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        // Board state
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        // update Board state and rerender
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className = "status" > { status }</div>
                <div className = "board-row" >
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className = "board-row" >
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className = "board-row" >
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div> 
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className = "game">
                <div className = "game-board"><Board /></div>
                <div className = "game-info">
                    <div> { /* status */ }</div>
                    <ol> { /* TODO */ } </ol>
                </div >
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('game')
);