console.log(miminwa,"ful testing")

/*
class Square extends React.Component {



  render() {
    return (
      <button className="square" 
              onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}*/

/* change the Square to be a function component.*/
/* 
In React, function components are a simpler way to write 
components that only contain a render method and don’t have their own state.
*/
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
/*
  constructor(props) {    
    super(props);    
      this.state = {      
        squares: Array(9).fill(null),
        xIsNext: true,  
      }; 
   }
 */

  renderSquare(index) {
    return <Square
        value={this.props.squares[index]}
        onClick={() => this.props.onClick(index)}      
        />
  }

 

  /*

   handleClick(index) {
    const squares = this.state.squares.slice();
     if (calculateWinner(squares) || squares[index]) {      
       return;    
     }
    squares[index] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,    
    });
  }

  handleClick(index){
        const squares = this.state.squares.slice();
        if (squares[index] == 'X') {
             squares[index] = null;
        }else{
           squares[index] = 'X';  
        }  
         console.log(squares,this.state);
        this.setState({squares: squares});
  }
  */

  render() {
    
    return (
      <div>
       
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
      history: [{
       squares: Array(9).fill(null), //[0:null, 1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null, 8:null] initial state
      }],
      xIsNext: true,
      stepNumber: 0,
     };
   }

  handleClick(i) {
     const history = this.state.history;
     const current = history[this.state.stepNumber];
     const squares = current.squares.slice();
     if (calculateWinner(squares) || squares[i]) {
      return;
     }
     squares[i] = this.state.xIsNext ? 'X' : 'O';
     this.setState({
      history: history.concat([{
       squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
     });
  }

  jumpTo(index) {
    this.setState({
     stepNumber: index,
     xIsNext: (index % 2) === 0,
    });

  }

  render() {

    const history = this.state.history;
    const current = history[history.length - 1]; //get the last square played inside the history state
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {      
      const desc = move ?        
      'Go to move #' + move :        
      'Go to game start';      
      return (        
        <li key={move}>          
          <button  
             onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>        
        </li>      
        );    
    });

    let status;
    if (winner) {
     status = 'Winner: ' + winner;
    } else {
     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (

      <div SquareclassName="game">
      <div className="status">{status}</div>
        <div className="game-board">
          <Board            
          squares={current.squares}            
          onClick={(i) => this.handleClick(i)}          
          />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

//========================================//

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// console.log(document.getElementById('root'));



function calculateWinner(squares) {
  //A straight horizontal lines
  //A straight vertical lines
  //Or a straight diagonal line 
  // Makes a winner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
      return squares[a];
    }
  }
  return null;
}

 function immutableSplice(arr, start, deleteCount, ...items) {

    return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ];

 }

// Example usage: <ShoppingList name="Mark" />
