import React,{Component as reactComponent}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './search';
import * as serviceWorker from './serviceWorker';

console.log(Search)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  Search,
  document.getElementById('another-test')
);


// var arr = [3.4,5,67];
// function modi(arra:number[]) {
// 	var bitch = [...arra];
// 	bitch.push(34);

// 	console.log(bitch);
// }

// modi(arr);

// console.log(arr);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('test-div'));}

// setInterval(tick, 1000);

// function Clock(props:{date: Date}) {
//   return (
// 	    <div>      
// 		    <h1>Hello, world!</h1>      
// 		    <h2>It is {props.date.toLocaleTimeString()}.
// 		    </h2>    
// 	    </div>  
//     );
// }

class Clock extends reactComponent<object,{date: Date}> {
  public timerID: number = 0;
  constructor(props:object) {
    super(props);
    this.state = {date: new Date()};  
  }

  componentDidMount() { 
  	console.log(document.getElementById("he-goat"));
  	this.timerID = window.setInterval(      
  		() => this.tick(),      
  		1000    
  		);
   }
  componentWillUnmount() {
    clearInterval(this.timerID);  
  }

	 tick() {
	  this.setState({
	    date: new Date()
	  });
	}

   handleClick(event: React.MouseEvent) {  
   console.log(event)  
  	event.preventDefault();    
  	console.log('The link was clicked.');  
  }
  render() {
    return (
      <div>
        <h1 id="he-goat" onClick={this.handleClick}>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


// Clock.prototype.render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }



  ReactDOM.render(
    <Clock />,    document.getElementById('test-div')
  );



function UserGreeting(props: object) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: object) {
  return <h1>Please sign up.</h1>;
}


function Greeting(props: {isLoggedIn: boolean}) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginButton(props: {onClick: (event:React.MouseEvent)=> void}) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: {onClick: (event:React.MouseEvent)=> void} ) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component<object,{isLoggedIn: boolean}> {
  constructor(props:object) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick(event: React.MouseEvent) {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick(event: React.MouseEvent) {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} /> 
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));


// setInterval(tick, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
